const router = require('express').Router();
const authUser = require('../controllers/auth.controller');
const authMiddleware = require( '../middlewares/auth.middleware' );

router.post('/register' , authUser.store);
router.post('/login' , authUser.login);

module.exports = router;

