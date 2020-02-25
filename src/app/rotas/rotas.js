const FuncDao = require('../infra/func-dao')
const db = require('../../config/database')

module.exports = (app) => {
   
        //app.get('/', function(requisicao, resposta) {
          //  resposta.send('<html><head><meta charset="utf-8"><title>HTML Tutorial</title></head><body><h1>Casa do Código</h1></body></html>');
        //})
   
        app.get('/contas', function(req, resp) {

            const funcDao = new FuncDao(db);
            funcDao.lista()
                    .then(contas => resp.marko(
                        require('../views/livros/lista/lista.marko'),
                        {
                            contas: contas
                        }
        
                    ))
                    .catch(erro => console.log(erro));
        
        });

        app.post('/contas', function(req, resp){
           console.log(req.body) 
           const funcDao = new FuncDao(db);
             funcDao.adiciona(req.body)
                    .then(resp.redirect('/contas'))
                    .catch(erro => console.log(erro));
        })

        app.delete('/contas:id', function(req, resp) {
            const id = req.params.id;
        
            const funcDao = new FuncDao(db);
            funcDao.remove(id)
            .then(() => resp.status(200).end())
            .catch(erro => console.log(erro));
        });
}

