'use strict';

;(function () {

    var form = document.querySelector('form');
    var textArea = document.querySelector('form textarea');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var mensagem = document.querySelector('.formNovoCartao-conteudo');
        if (mensagem.value == "") {
            var criaDiv = document.createElement('div');
            criaDiv.classList.add('formNovoCartao-msg');
            criaDiv.textContent = 'preencha alguma coisa';

            textArea.insertAdjacentElement('afterend', criaDiv);

            criaDiv.addEventListener('animationend', function () {
                this.remove();
            });
        } else {
            criaCartoes({ conteudo: textArea.value });
            form.reset();
        }
    });
})();