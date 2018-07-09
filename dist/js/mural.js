'use strict';

var textArea = document.querySelector('form textarea');
var mural = document.querySelector('.mural');
var numeroCartao = 4;

function criaCartoes(instrucoes) {
    var posicaoCartao = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "afterbegin";

    var cartao = '\n        <article id="cartao_' + numeroCartao + '" tabindex="0" class="cartao" style="' + instrucoes.cor + '">\n        <div class="opcoesDoCartao">\n            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao " tabindex="0">\n            <svg><use xlink:href="#iconeRemover"></use></svg>\n            </button>\n\n            <input type="radio" name="corDoCartao' + numeroCartao + '" value="#EBEF40" id="corPadr\xE3o-cartao' + numeroCartao + '" class="opcoesDoCartao-radioTipo" checked>\n            <label for="corPadr\xE3o-cartao' + numeroCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">\n            Padr\xE3o\n            </label>\n\n            <input type="radio" name="corDoCartao' + numeroCartao + '" value="#F05450" id="corImportante-cartao' + numeroCartao + '" class="opcoesDoCartao-radioTipo">\n            <label for="corImportante-cartao' + numeroCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">\n            Importante\n            </label>\n\n            <input type="radio" name="corDoCartao' + numeroCartao + '" value="#92C4EC" id="corTarefa-cartao' + numeroCartao + '" class="opcoesDoCartao-radioTipo">\n            <label for="corTarefa-cartao' + numeroCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">\n            Tarefa\n            </label>\n\n            <input type="radio" name="corDoCartao' + numeroCartao + '" value="#76EF40" id="corInspira\xE7\xE3o-cartao' + numeroCartao + '" class="opcoesDoCartao-radioTipo">\n            <label for="corInspira\xE7\xE3o-cartao' + numeroCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">\n            Inspira\xE7\xE3o\n            </label>\n        </div>\n        <p class="cartao-conteudo" contenteditable tabindex="0">' + instrucoes.conteudo + '</p>\n    </article>\n    ';

    mural.insertAdjacentHTML(posicaoCartao, cartao);

    numeroCartao++;
}

(function () {
    console.log('oi');
    $.ajax({
        url: 'https://ceep.herokuapp.com/cartoes/carregar',
        method: 'GET',
        data: { usuario: 'gabriel@gmail.com' },
        dataType: 'jsonp',
        success: function success(resposta) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = resposta.cartoes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var cartao = _step.value;


                    criaCartoes(cartao);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    });
})();