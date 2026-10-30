const express = require("express");
const cors = require("cors");
const niveisControleller = require("./src/routes/niveisRoutes");

const app = express();


app.use(cors()); //permite que requisições externos acessem as rotas
app.use(express.json()); //transforma o JSON de corpo de requisição em JS

app.get("/", (req, res) => {
    res.send("Ola mundo");
});

app.use("/niveis", niveisRoutes);

app.listen(3000, () => {
    console.log("Servidor on: http://localhost:3000");

});