const FuncDao = require('../infra/func-dao')
const db = require('../../config/database')

module.exports = (app) => {
   
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

        app.delete('/contas/:id', function(req, resp) {
            const id = req.params.id;
            const funcDao = new FuncDao(db);
            funcDao.remove(id)
            .then(() => resp.status(200).end())
            .catch(erro => console.log(erro));
        });
        
        
        /////////////edicao////////
        app.get('/contas/form/:id', function(req, resp) {
            const id = req.params.id;
            const funcDao = new FuncDao(db);

            funcDao.buscaPorId(id)
                .then(contas => 
                    resp.marko(
                        require('../views/livros/form/form.marko'),
                        { contas: contas }
                    )
                )
                .catch(erro => console.log(erro));
        
        });

        app.put('/contas', function(req, resp){
            console.log(req.body) 
            const funcDao = new FuncDao(db);
              funcDao.atualiza(req.body)
                     .then(resp.redirect('/contas'))
                     .catch(erro => console.log(erro));
         })

}


    