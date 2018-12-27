const
	express = require('express'),
	userController = require('../controllers/user');

let router = express.Router();

router.post('/register', userController.register);
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);

module.exports = router;