//LINHAS PARA BLOCOS
let btLinhasColunas = document.querySelector('.bt-linhas-colunas')
let mural = document.querySelector('.mural')
let btsRemover = document.querySelectorAll('.opcoesDoCartao-remove')

let noJs = document.querySelectorAll('.no-js')
noJs.forEach(function(element){
    element.classList.remove('no-js')
})

mural.addEventListener('click', function(event){

    if( event.target.classList.contains('opcoesDoCartao-remove') ){
            event.target.parentNode.parentNode.classList.add('cartao--some')
            event.target.parentNode.parentNode.addEventListener('transitionend', function(){
                this.remove();
            })
    }else if(event.target.classList.contains('opcoesDoCartao-radioTipo') ){
        event.target.parentNode.parentNode.style.background = `${event.target.value}`
    }
})



btLinhasColunas.addEventListener('click', function(){
    if(this.textContent == 'Linhas'){
        this.textContent = 'Blocos'
    } else{
        this.textContent = 'Linhas'
    }
    mural.classList.toggle('vertical');

})


//Focus Out
const cards = document.querySelectorAll('.cartao')
cards.forEach(function(element){
    element.addEventListener('focusin', function(event){
        event.PreventDefault
        this.classList.add('focusIn')
    })

    element.addEventListener('focusout', function(event){
        event.PreventDefault
        this.classList.remove('focusIn')
    })
})


//TECLAS
const labels = document.querySelectorAll('.cartao label')
labels.forEach(function(label){
    label.addEventListener('keyup', function(event){
        if( event.keyCode == 13 || event.keyCode == 32 ){
           event.target.click()
        }
    })
})

//Validando cartao antes de adicionar
