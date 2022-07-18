const express = require('express'),
    router = express.Router(),
    multer = require("multer"),
    crypto = require('crypto'),
    mongoose = require('mongoose'),
    Grid = require('gridfs-stream');

const {
    GridFsStorage
} = require('multer-gridfs-storage');
const path = require('path');
const {
    saveDocumentDB,
    findDocumentsByGroup
} = require('../controllers/DocumentController');

var mongoURI
if (process.env.NODE_ENV === 'testing') {
    mongoURI = process.env.MONGODB_URI_TEST;
}
if (process.env.NODE_ENV === 'production') {
    mongoURI = process.env.MONGODB_URI_PROD;
}
if (process.env.NODE_ENV === 'development') {
    mongoURI = process.env.MONGODB_URI_DEV;
}


// Create mongo connection
const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs, gridfsBucket;

conn.once('open', () => {
    // Add this line in the code
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'uploads'
    });
    var CHUNKS_COLL = 'uploads.chunks';
    var FILES_COLL = 'uploads.files';
    // Init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({
    storage
})

router.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    if (req.body.user && req.body.group) {
        var document = saveDocumentDB(req.body.group, file, req.body.user);
        return res.json({
            document: document,
            file: req.file
        });
    }
    return res.status(402).json({
        message: "error"
    });

});
// @route GET /
// @desc Loads form
router.get('/', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        // Check if files
        if (!files || files.length === 0) {
            res.render('index', {
                files: false
            });
        } else {
            files.map(file => {
                if (
                    file.contentType === 'image/jpeg' ||
                    file.contentType === 'image/png'
                ) {
                    file.isImage = true;
                } else {
                    file.isImage = false;
                }
            });
            res.render('index', {
                files: files
            });
        }
    });
});


// @route GET /files
// @desc  Display all files in JSON
router.get('/files', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        // Check if files
        if (!files || files.length === 0) {
            return res.status(404).json({
                err: 'No files exist'
            });
        }
        // Files exist
        return res.json(files);
    });
});

// @route GET /files by group id
// @desc  Display all files in JSON
router.get('/files/group/:id', findDocumentsByGroup);

// @route GET /files/:filename
// @desc  Display single file object
router.get('/files/:filename', (req, res) => {
    gfs.files.findOne({
        filename: req.params.filename
    }, (err, file) => {
        // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
            });
        }
        // File exists
        return res.json(file);
    });
});

// @route GET /image/:filename
// @desc Display Image
router.get('/image/:filename', (req, res) => {
    gfs.files.findOne({
        filename: req.params.filename
    }, (err, file) => {
        // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
            });
        }
        // Check if image
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            // Read output to browser
            const readStream = gridfsBucket.openDownloadStream(mongoose.Types.ObjectId(file._id));
            readStream.pipe(res);
        } else {
            res.status(404).json({
                err: 'Not an image'
            });
        }
    });
});

router.get('/download/:filename', (req, res) => {
    gfs.files.findOne({
        filename: req.params.filename
    }, (err, file) => {
        // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
            });
        }
        let mimeType = file.contentType;
        if (!mimeType) {
            mimeType = mime.lookup(file.filename);
        }
        res.set({
            'Content-Type': mimeType,
            'Content-Disposition': 'attachment; filename=' + file.filename
        });
        // Read output to browser
        const readStream = gridfsBucket.openDownloadStream(mongoose.Types.ObjectId(file._id));
        readStream.pipe(res);
    });
});


// @route DELETE /files/:id
// @desc  Delete file
router.delete('/files/:id', (req, res) => {
    gfs.remove({
        _id: req.params.id,
        root: 'uploads'
    }, (err, gridStore) => {
        if (err) {
            return res.status(404).json({
                err: err
            });
        }
        res.redirect('/');
    });
});
module.exports = router;