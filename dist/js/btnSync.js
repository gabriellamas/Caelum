'use strict';

;(function () {

    'use strict';

    var btnSync = document.querySelector("#btnSync");

    btnSync.addEventListener('click', function () {

        var conexaoApi = new XMLHttpRequest();
        conexaoApi.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar');

        var cartoes = document.querySelectorAll('.cartao');

        //transforma em array (ele vem como objeto)
        cartoes = Array.from(cartoes).map(function (cartao) {
            var conteudo = cartao.querySelector(".cartao-conteudo").textContent;
            var cor = cartao.style.backgroundColor;

            return {
                conteudo: conteudo,
                cor: cor
            };
        });
        console.log(cartoes);

        var cartoesUsuario = {
            usuario: 'gabriel@gmail.com',
            cartoes: cartoes
        };

        console.log(cartoesUsuario);

        conexaoApi.setRequestHeader('Content-Type', 'application/json');

        conexaoApi.send(JSON.stringify(cartoesUsuario));

        conexaoApi.addEventListener('load', function () {
            console.log(conexaoApi.response);
        });

        //sempre envia e recebe JSON como texto, tem que transforma-lo para objeto para conseguir trata-lo e pra enviar precisa voltar para string
        //github.com/caelum/caelumpic-server


        //Maneira antiga
        /*  let cartoesObjeto = []
         
         cartoes.forEach( (cartao) =>{
             let conteudo = cartao.querySelector(".cartao-conteudo")
             let cor = cartao.style.backgroundColor
              cartoesObjeto.push({
                 conteudo,
                 cor
             })
         }) 
          conexaoApi.send(cartoesUsuario)
         
         */
    });
})();