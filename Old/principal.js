// function mudaLayout(){
//     document.querySelector(".mural").classList.toggle("mural--linhas"); 
// }

document.querySelector("#mudaLayout").addEventListener("click",function(){

    var mural =   document.querySelector(".mural")
    
    mural.classList.toggle("mural--linhas");

if (mural.classList.contains("mural--linhas")){
    this.textContent = "Blocos";
} else {
    this.textContent = "Linhas";
}
})

//     //Inserindo uma classe em um elemento pelo #id
// var cartao = document.querySelector("#cartao_1");
// cartao.classList.add("cartao--some");

function removeCartao(){
    var cartao = document.querySelector("#cartao_" + this.dataset.ref);

    // da uma classe que faz ele sumir devagar
    cartao.classList.add("cartao--some");

    //tira da pagina depois da animacao
    setTimeout(function(){
        cartao.remove();
    }, 400)
}

//Pega os botoes
var botoes = document.querySelectorAll(".opcoesDoCartao-remove");
for (var index = 0; index < botoes.length; index++) {
    botoes[index].addEventListener("click",removeCartao);    
} 
