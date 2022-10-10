import connection from "./connection";

const criarTabelaClientes = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS clientes (
            id INT PRIMARY KEY AUTO_INCREMENT,
            nome VARCHAR(255) NOT NULL,
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
            INSERT INTO clientes (id, nome, profissao, cartao)
            VALUES 
            (1, "Aurélio ", "Dev Jr", "bronze"),
            (2, "Ana ", "Psicologa", "bronze"),
            (3, "Afonso ", "Engenheiro", "ouro"),
            (4, "Manasse ", "professor", "prata"),
            (5, "Albertina ", "medica", "ouro");
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