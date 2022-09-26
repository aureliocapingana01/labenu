"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//endpoint para pegar usuario pelo nome, usamos a query que é mais para busca
app.get('/users', (req, res) => {
    let statusCode = 400;
    try {
        const name = req.query.name;
        if (!name) {
            statusCode = 422;
            throw new Error("Falta o parametro de busca, o nome");
        }
        const user = data_1.users.find((array) => {
            return array.name.toLowerCase() === name.toLowerCase();
        });
        if (!user) {
            statusCode = 404;
            throw new Error("Usuario não encontrado ");
        }
        res.status(statusCode).send(user);
    }
    catch (error) {
        res.status(statusCode).send(error.message);
    }
});
//endpoint para busca usuario com id
app.get('/users/:id', (req, res) => {
    let statusCode = 500;
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) { //isNaN compara o valor exibe um booleano
            statusCode = 422;
            throw new Error("O ID precisa ser um number");
        }
        const user = data_1.users.filter((array) => {
            return array.id === id;
        });
        if (!user.length) { // se o array do usuario for vazio
            statusCode = 404;
            throw new Error("Usuário não encontrado");
        }
        res.status(200).send(user);
    }
    catch (error) {
        res.status(statusCode).send(error.message);
    }
});
const server = app.listen(process.env.PORT || 2023, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
