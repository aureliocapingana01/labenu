"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => console.log("Servidor aberto na porta 3003"));
const usuarios = [];
app.post('/create/user', (req, res) => {
    let statusCode = 500;
    try {
        const { id, name, age } = req.body;
        if (!id || !name || !age) {
            statusCode = 401;
            throw new Error("Credênciais invalidas.");
        }
        const usarioExiste = usuarios.find((user) => user.name === name);
        if (usarioExiste) {
            statusCode = 409;
            throw new Error("Usuário já existe");
        }
        const user = {
            id,
            name,
            age
        };
        usuarios.push(user);
        return res.status(201).send("Usuário criado com sucesso.");
    }
    catch (error) {
        return res.status(statusCode).send({ message: error.message, status: statusCode });
    }
});
app.get('/usuarios', (req, res) => {
    try {
        const resultado = usuarios.map((result) => result);
        return res.status(200).send(resultado);
    }
    catch (error) {
    }
});
app.delete('/usuario/:id', (req, res) => {
    let statusCode = 500;
    try {
        const { id } = req.params;
        if (!id) {
            statusCode = 404;
            throw new Error("Credências invalida.");
        }
        const findUser = usuarios.find((user) => user.id === id);
        console.log(findUser);
        const filterValue = usuarios.find((usuario, indice) => {
            if (usuario.id === id) {
                usuarios.splice(indice, 1);
            }
        });
        return res.status(200).send(filterValue);
    }
    catch (error) {
        return res.status(statusCode).send({ message: error.message });
    }
});
app.put('/edit/user/:id', (req, res) => {
    let statusCode = 500;
    try {
        const { id } = req.params;
        const { name, age } = req.body;
        if (!name || !age) {
            statusCode = 401;
            throw new Error("Credênciais invalidas.");
        }
        const usarioExiste = usuarios.find((user) => user.name === name);
        if (usarioExiste) {
            statusCode = 409;
            throw new Error("Usuário já existe");
        }
        const usuarioPeloId = usuarios.find((user) => user.id === id);
        if (!usuarioPeloId) {
            statusCode = 404;
            throw new Error("Usuário não encontrado");
        }
        usuarioPeloId.id = id;
        usuarioPeloId.name = name;
        usuarioPeloId.age = age;
        return res.status(200).send(usuarioPeloId);
    }
    catch (error) {
        return res.status(statusCode).send({ message: error.message });
    }
});
//# sourceMappingURL=index.js.map