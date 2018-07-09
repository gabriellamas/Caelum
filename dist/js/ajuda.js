'use strict';

;(function () {
    'use stric';

    btnAjuda.addEventListener('click', function () {

        //pega o JSON
        var conexaoApi = new XMLHttpRequest();
        conexaoApi.open('GET', 'http://ceep.herokuapp.com/cartoes/instrucoes');

        //formata para JSON
        conexaoApi.responseType = 'json';

        //envia
        conexaoApi.send();

        //escuta
        conexaoApi.addEventListener('load', function () {
            conexaoApi.response.instrucoes.forEach(function (instrucao) {
                criaCartoes(instrucao);
            });
        });

        //for(let info of informacoes){}
    });
})();