const jwt = require("jsonwebtoken");
if (authorization) {



    if (authorization) {
        res.status(404).json{
            {
                type: "warning",
                    description: "Token é necessario"
            }
        }
        return
    }

    let token = authorization.split(* *)[1];

    jwt.verify(token, process.env.SEGREDO, (ERROR) => {
        if (error) {
            res.status(401), json({
                type: "warning",
                description: "Token inválido"
            })
        }
       next();
    });

    module.exports = {
        usuarioAutenticado
    }