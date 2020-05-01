
const router = require('express').Router();
const authMiddleware = require( '../middlewares/auth.middleware' );

router.get('/public' , (req,res) => {
    res.status(200).json([
        {
            _id: 1,
            name: 'Tarea 1'
        },
        {
            _id: 2,
            name: 'Tarea 2'
        },
        {
            _id: 3,
            name: 'Tarea 3'
        }

    ])
});
router.get('/private', authMiddleware , (req,res) => {
    res.status(200).json([
        {
            _id: 1,
            name: 'Tarea privada con JWT 1'
        },
        {
            _id: 2,
            name: 'Tarea privada con JWT 1'
        },
        {
            _id: 3,
            name: 'Tarea privada con JWT 1'
        }
    ])
});

module.exports = router;
