function validarDados(req, res, next){
    const (nome) = req.body;

    if(nome){
        res.jason({
            type: "warning",
            discription: "Coluna nome não informada"

        })
    }

    next(;



    )
}

module.exports = {
    validarDados
}