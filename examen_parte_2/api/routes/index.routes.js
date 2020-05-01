const router = require( 'express' ).Router();
const authRoutes = require('./auth.routes')
const taskRoutes = require('./task.routes')


router.use('/auth', authRoutes)
router.use('/task', taskRoutes)


module.exports = router;