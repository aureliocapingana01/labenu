import connection from "./connection";

const criarTabelaProdutos = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS Usuarios (
            id INT PRIMARY KEY AUTO_INCREMENT, 
            nome VARCHAR(255) NOT NULL,
            telefone BIGINT NOT NULL UNIQUE,
            profissao VARCHAR(255) NOT NULL,
            nacionalidade ENUM("brasil", "estrangeiro(a)") NOT NULL
            );
        `)

        console.log("Tabela Usuarios criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Usuarios.")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaProdutos() {
    try {
        await connection.raw(`
            INSERT INTO Usuarios (id, nome, telefone, profissao, nacionalidade)
            VALUES 
            (1, "Aurelio Capingana", 41996769560, "Dev Jr", "estrangeiro(a)"),
            (2, "Paola Camargo", 54997760560, "Analista", "brasil"),
            (3, "Carlos Dutra", 41996025506, "Dev Sn", "brasil"),
            (4, "Afonso Cameia", 54998761222, "Dev PL", "estrangeiro(a)"),
            (5, "Andreia Margott", 54996769560, "Dev Jr", "brasil");
        `)
        
        console.log("Tabela Produtos populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular tabela Produtos.")
        console.log(error.sqlMessage)
    }
}

criarTabelaProdutos()
.then(() => popularTabelaProdutos())
.finally(() => process.exit())