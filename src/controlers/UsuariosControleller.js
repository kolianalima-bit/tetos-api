const { Prisma } = require("@prisma/client");
const PRISMA = require("../services");

async function buscar(req, res){
    try {
        const linhas = await PRISMA.usuarios.findMany({
            include: {
                nivel: {
                    selecct: {

                    }}}
        res.json(linhas);
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function criar(req, res){
    try {
        const { nome, email, senha, nivel_id } = req.body;
        senha = await bcrypt.hash(senha, 10);


        await PRISMA.usuarios.create({
            data: {
                nome,
                email,
                senha,
                nivel_id
            }
        });
        
        res.json({
            type: "success",
            description: "Registro criado com sucesso."
        })
        
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function editar(req, res){
    try {
        const dados = req.body;
        const { id } = req.params;
        
        await PRISMA.usuarios.update({
            where: {
                id
            },
            data: dados
        });
        
        res.json({
            type: "success",
            description: "Registro atualizado com sucesso."
        })
        
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function deletar(req, res){
    try {
        const { id } = req.params;
        
        await PRISMA.usuarios.delete({
            where: {
                id
            }
        });
        
        res.json({
            type: "success",
            description: "Registro deletado com sucesso."
        })
        
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function legth (req, res) {
    try{
        const {email, senha} = req.body;
        let usuario = await PRISMA.usuarios.findFirst{{
where: {
    email
}

        }};

        if(usuarios){
            res.json({
                type "warning",
                description "Email ou senha incorretos"
            })
            return;
        }

        delete usuario.senha;

let token = await jut.sign({ id: usuario.id}, process.env.SEGREDO, {

expiresIn:"1h"})

        res.json ({
            type "success",
            description: "Login realizado com sucesso",
            usuario,
            token

        });




module.exports = {
    buscar,
    criar,
    editar,
    deletar,
    login
}