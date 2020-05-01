const User = require('../models/auth.model')
const jwt = require('jsonwebtoken')

exports.store = async (req,res) => {
    try {
        let { name, email, password } = req.body;
        let newUser = new User ({name,email,password});
        await newUser.save();

        let token = jwt.sign({_id: newUser._id}, 'secret')

        return res.status(200).json({
            message: 'Registro exitoso',
            success: 'ok',
            token: token
        })
        
    } catch (error) {
        return res.status(500).json({
            message: 'error',
            success: 'ok',
            error: error
        })
    }
   

}

exports.login = async (req,res) => {
    try {
        let { email, password } = req.body;

        let user = await User.findOne({email})

        if(!user) {
        return res.status(401).json({
                message: 'No existe el usuario'
            })
        }
        if(user.password !== password) {
            return res.status(401).json({
                message: 'No existe el usuario'
            })
        }

        let token = jwt.sign({_id: user._id}, 'secret')
        
        return res.status(200).json({
            message: 'Login exitoso',
            success: 'ok',
            token: token
        })
        
    } catch (error) {
        return res.status(500).json({
            message: 'error',
            success: 'ok',
            error: error
        })
    }
}