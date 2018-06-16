;(function(){
    'use stric'

    console.log(btnAjuda)

    let instrucoes = [
        "Bem vindo ao Ceep",
        "Clique no botão linhas para mudar o layout",
        "O site é otimizado para celulares"

    ]

    btnAjuda.addEventListener('click', function(){
        instrucoes.forEach(function(element){
            alert(element)
        })

        //for(let info of informacoes){}
    })
})()