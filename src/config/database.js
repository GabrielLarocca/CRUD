const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome_completo VARCHAR(40) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL, 
    senha VARCHAR(255) NOT NULL
)
`;

const INSERIR_USUARIO_1 = 
`
INSERT INTO usuarios (
    nome_completo, 
    email,
    senha
) SELECT 'Gabriel Larocca', 'gabriellarocca1@outlook.com', '123' WHERE NOT EXISTS (SELECT * FROM usuarios WHERE email = 'gabriellarocca1@outlook.com')
`;

const LIVROS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS contas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL, 
    dataRecebimento DATE,
    valor TEXT NOT NULL
)
`;

const INSERIR_LIVRO_1 = 
`
INSERT INTO contas (
    nome,
    dataRecebimento,
    valor
) SELECT 'Gabriel', '03/03/2022', '100.00' WHERE NOT EXISTS (SELECT * FROM contas WHERE nome = 'Gabriel')
`;

const INSERIR_LIVRO_2 = 
`
INSERT INTO contas (
    nome, 
    dataRecebimento,
    valor
) SELECT 'Jordan', '2/24/2018', '10.00' WHERE NOT EXISTS (SELECT * FROM contas WHERE nome = 'Jordan')
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(USUARIOS_SCHEMA);
    bd.run(INSERIR_USUARIO_1);
    bd.run(LIVROS_SCHEMA);
    bd.run(INSERIR_LIVRO_1);
    bd.run(INSERIR_LIVRO_2);

    bd.each("SELECT * FROM usuarios", (err, usuario) => {
        console.log('Usuario: ');
        console.log(usuario);
    });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd; 