let textArea = document.querySelector('form textarea');
let mural = document.querySelector('.mural');
let numeroCartao = 4;

function criaCartoes(instrucoes, posicaoCartao = "afterbegin"){
    let cartao = `
        <article id="cartao_${numeroCartao}" tabindex="0" class="cartao" style="${instrucoes.cor}">
        <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao " tabindex="0">
            <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>

            <input type="radio" name="corDoCartao${numeroCartao}" value="#EBEF40" id="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo" checked>
            <label for="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
            Padrão
            </label>

            <input type="radio" name="corDoCartao${numeroCartao}" value="#F05450" id="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
            Importante
            </label>

            <input type="radio" name="corDoCartao${numeroCartao}" value="#92C4EC" id="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
            Tarefa
            </label>

            <input type="radio" name="corDoCartao${numeroCartao}" value="#76EF40" id="corInspiração-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
            Inspiração
            </label>
        </div>
        <p class="cartao-conteudo" contenteditable tabindex="0">${instrucoes.conteudo}</p>
    </article>
    `

    mural.insertAdjacentHTML(posicaoCartao,cartao);

    numeroCartao++
}

(function(){
    console.log('oi');
    $.ajax({
        url: 'https://ceep.herokuapp.com/cartoes/carregar',
        method: 'GET',
        data: {usuario: 'gabriel@gmail.com'},
        dataType: 'jsonp',
        success: function(resposta){
            for(let cartao of resposta.cartoes){

                
                criaCartoes(cartao);
            }
        }
    })

})()