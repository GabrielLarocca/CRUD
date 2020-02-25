class FuncDao{
    constructor(db){
        this._db = db
    }
    
    adiciona(contas) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO contas (
                nome, 
                dataRecebimento,
                valor
            )  values (?, ?, ?)`,
            [
                contas.nome,
                contas.dataRecebimento,
                contas.valor
            ], 
            function (err) {
                if (err) {
                    console.log(err);
                    return reject('Não foi possível adicionar a conta!');
                }

                resolve();
            }
            )
    
        });
    } 


    lista() {
        return new Promise((resolve,reject) => {
            this._db.all(
                'SELECT * FROM contas',
                (erro, resultados) =>{
                    if (erro) return reject("Não foi possivel listar as contas")
            
                     return resolve(resultados)
                 }
            )
    })
}


atualiza(contas) {
    return new Promise((resolve, reject) => {
        this._db.run(`
            UPDATE contas SET
            nome = ?,
            dataRecebimento = ?,
            valor = ?
            WHERE id = ?
        `,
        [
            contas.nome,
            contas.dataRecebimento,
            contas.valor,
            contas.id
        ],
        erro => {
            if (erro) {
                return reject('Não foi possível atualizar as contas!');
            }

            resolve();
        });
    });
}

remove(id) {

    return new Promise((resolve, reject) => {
        this._db.run(
            `
                DELETE 
                FROM contas
                WHERE id = ?
            `,
            [id],
            (erro) => {
                if (erro) {
                    return reject('Não foi possível remover as contas!');
                }
                return resolve();
            }
        );
    });
}


}



module.exports = FuncDao;