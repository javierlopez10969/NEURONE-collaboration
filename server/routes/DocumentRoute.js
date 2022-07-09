const express = require('express'),
    router = express.Router(),
    Bookmark = require('../models/Bookmark'),
    Socket = require('../utils/socket'),
    multer = require("multer");;

const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new Error("Incorrect file");
        error.code = "INCORRECT_FILETYPE";
        return cb(error, false)
    }
    cb(null, true);
}

const upload = multer({
    dest: './uploads',
    fileFilter,
    limits: {
        fileSize: 5000000
    }
});
router.post('/upload', upload.single('file'), (req, res) => {
    res.json({
        file: req.file
    });
});

module.exports = router;