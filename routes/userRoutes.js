const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.get('/:id', userController.findByIdgame);
router.post('/', userController.addvideojuego);

module.exports = router;
