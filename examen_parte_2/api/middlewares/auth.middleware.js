const jwt = require('jsonwebtoken');

module.exports = function (req,res,next) {
    if(!req.headers.authorization){
        return res.status(401).json({
            message: 'Necesitas Iniciar sesion'
        })
    }
    let token = req.headers.authorization.split(' ')[1]
    if( token ==null) {
        return res.status(401).json({
            errors: "Acceso denegado"
        })
    }

    try {
        const verified = jwt.verify(token, 'secret')
        req.user = verified
        next()
    } catch (error) {
        return res.status(401).json({
            error: 'token invalido'
        })
    }

}