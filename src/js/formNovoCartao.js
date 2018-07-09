;(function(){
    
    let form = document.querySelector('form');
    let textArea = document.querySelector('form textarea');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        let mensagem = document.querySelector('.formNovoCartao-conteudo')
        if(mensagem.value == ""){
            let criaDiv = document.createElement('div')
            criaDiv.classList.add('formNovoCartao-msg')
            criaDiv.textContent = 'preencha alguma coisa'

            textArea.insertAdjacentElement('afterend', criaDiv);

            criaDiv.addEventListener('animationend', function(){
                this.remove();
            })

        }else{
            criaCartoes({conteudo: textArea.value})
            form.reset();
        }
        
    })

    
})()