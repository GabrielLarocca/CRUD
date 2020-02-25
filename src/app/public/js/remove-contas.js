let tabelaContas = document.querySelector('#contas');
tabelaContas.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;
    
    if (elementoClicado.dataset.type == 'remocao') {
        let contasId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/contas/${contasId}`, {method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#contas_${contasId}`);
                tr.remove();

            })
            .catch(erro => console.log(erro));

    }

});