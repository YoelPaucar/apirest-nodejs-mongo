function authorize(roles = []){
    if(typeof roles === 'string'){
        roles = [roles]
    }
    return[
        (req,res,next) =>{
            if(!roles.includes(req.user.role)) return res.status(403).send('No tienes el rol Permitido para acceder a este recurso')
            next();
        }
    ]
}

module.exports = authorize