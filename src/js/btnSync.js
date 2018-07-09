;(function(){

    'use strict'

    let btnSync = document.querySelector("#btnSync")

    btnSync.addEventListener('click', function(){
        
        let conexaoApi = new XMLHttpRequest()
        conexaoApi.open('POST','https://ceep.herokuapp.com/cartoes/salvar')

        let cartoes = document.querySelectorAll('.cartao')

        //transforma em array (ele vem como objeto)
        cartoes =  Array.from(cartoes).map(cartao => {
            let conteudo = cartao.querySelector(".cartao-conteudo").textContent
            let cor = cartao.style.backgroundColor

            return {
                conteudo,
                cor
            }
        })
        console.log(cartoes)

        const cartoesUsuario = {
            usuario: 'gabriel@gmail.com',
            cartoes
        }

        console.log(cartoesUsuario)

        conexaoApi.setRequestHeader('Content-Type', 'application/json')

        conexaoApi.send(JSON.stringify(cartoesUsuario))

        conexaoApi.addEventListener('load', function(){
            console.log(conexaoApi.response);
            
        })


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

    })

})()