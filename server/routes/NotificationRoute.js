//Importaciones
const express = require('express');
const router = express.Router();
const {
    createNotification,
    getNotification,
    getByUser,
    updateNotification,
    deleteNotification,
    getAll,
    deleteAll

} = require('../controllers/NotificationController');
//Routes + Controllers
router.post('/', createNotification);
// Update notification
router.post('/:id', updateNotification)
//Get all
router.get('/', getAll)
//Get by id
router.get('/:id', getNotification)
//Get by user
router.get('/user/:id', getByUser)
// Delete by id
router.delete('/:id', deleteNotification)
//Delete all
router.delete('/all/', deleteAll)

module.exports = router;