;(function(){
    
    let form = document.querySelector('form');
    textArea = document.querySelector('form textarea');
    mural = document.querySelector('.mural');
    numeroCartao = 4;

    form.addEventListener('submit', function(event){
        event.preventDefault();

        let mensagem = document.querySelector('.formNovoCartao-conteudo')
        if(mensagem.value == ""){
            criaDiv = document.createElement('div')
            criaDiv.classList.add('formNovoCartao-msg')
            criaDiv.textContent = 'preencha alguma coisa'

            textArea.insertAdjacentElement('afterend', criaDiv);

            criaDiv.addEventListener('animationend', function(){
                this.remove();
            })

        }else{
            let numeroCartao = 4;

           let cartao = `
                <article id="cartao_${numeroCartao}" tabindex="0" class="cartao">
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
                <p class="cartao-conteudo" contenteditable tabindex="0">${textArea.value}</p>
            </article>
           `

            mural.insertAdjacentHTML('afterbegin',cartao);

            numeroCartao++

            form.reset();
        }
        
    })


    //OU

    /*let btn = document.querySelector('.formNovoCartao-salvar')
    btn.addEventListener('click', function(event){
        event.preventDefault();

        let mensagem = document.querySelector('.formNovoCartao-conteudo')
        if(mensagem.value == "")
            console.log('Está vazio')
        else
            console.log('Não está vazio')
        
    })*/
    
    
})()