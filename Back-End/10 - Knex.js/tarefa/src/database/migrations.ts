import connection from "./connection";

const criarTabelaClientes = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS clientes (
            id BIGINT PRIMARY KEY AUTO_INCREMENT,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            profissao VARCHAR(100) NOT NULL,
            cartao ENUM("bronze", "prata", "ouro") NOT NULL
            );
        `)

        console.log("Tabela clientes criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela clientes.")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaClientes() {
    try {
        await connection.raw(`
            INSERT INTO clientes (id, nome, email, profissao, cartao)
            VALUES 
            (1, "Aurélio ",   "aurelio@gmail.com",   "Dev Jr",     "bronze"),
            (2, "Ana ",       "ana@gmail.com",       "Psicologa",  "bronze"),
            (3, "Afonso ",    "afonso@gmail.com",    "Engenheiro", "ouro"),
            (4, "Manasse ",   "manasse@gmail.com",   "professor",  "prata"),
            (5, "Albertina ", "albertina@gmail.com", "medica",     "ouro");
        `)
        
        console.log("Tabela clientes populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular tabela clientes.")
        console.log(error.sqlMessage)
    }
}

criarTabelaClientes()
.then(() => popularTabelaClientes())
.finally(() => process.exit())