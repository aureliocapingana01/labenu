import connection from "./connection";

const criarTabelaProdutos = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS clientes (
            id INT PRIMARY KEY AUTO_INCREMENT,
            nome VARCHAR(100) NOT NULL,
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

async function popularTabelaProdutos() {
    try {
        await connection.raw(`
            INSERT INTO clientes (id, nome, profissao, cartao)
            VALUES 
            (1, "Aurélio Capingana ", "Dev Jr", "bronze"),
            (2, "Ana Canjala", "Psicologa", "bronze"),
            (3, "Afonso Cameia", "Engenheiro", "ouro"),
            (4, "Manasse d'Castro", "professor", "prata"),
            (5, "Albertina Cameia ", "medica", "ouro");
        `)
        
        console.log("Tabela clientes populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular tabela clientes.")
        console.log(error.sqlMessage)
    }
}

criarTabelaProdutos()
.then(() => popularTabelaProdutos())
.finally(() => process.exit())