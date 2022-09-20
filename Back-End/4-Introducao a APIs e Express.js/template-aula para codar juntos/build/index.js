"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// configucoes necessaria p´ra rodar o servidor
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(2022, () => {
    console.log("Server is rumming in http://localhost:2022");
});
// termina a configução 
/*Dpois da configuração podemos criar nosso endpoit
Os endpoits recebem dois parametros REQUEST eo RESPONSE que devem ser importados na biblioteca do Express */
app.get('/test/:id', (req, res) => {
    //para pegar as informacoes que chegam na requisicão
    const id = req.params.id; // acessa parametro de caminho
    const password = req.headers.password;
    const name = req.body.name;
    // console.log('request feito') //quem recebe é o back
    console.log(id, password, name);
    res.status(201).send('👍👍 Parabéns, deu certo');
});
