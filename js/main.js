//LINHAS PARA BLOCOS
var btLinhasColunas = document.querySelector('.bt-linhas-colunas')
mural = document.querySelector('.mural')
btsRemover = document.querySelectorAll('.opcoesDoCartao-remove')

noJs = document.querySelectorAll('.no-js')
console.log(noJs)
noJs.forEach(function(element){
    element.classList.remove('no-js')
})


btLinhasColunas.addEventListener('click', function(){
    if(this.textContent == 'Linhas'){
        this.textContent = 'Blocos'
    } else{
        this.textContent = 'Linhas'
    }
    mural.classList.toggle('vertical');

})

btsRemover.forEach(function(element){
    element.addEventListener('click', function(element){
        let cartaoAtual = this.parentNode.parentNode
        cartaoAtual.classList.add('cartao--some')

        cartaoAtual.addEventListener('transitionend', function(){
            this.remove();
        })
    })
})



