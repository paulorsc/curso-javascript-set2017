document.querySelector('#mudaLayout').addEventListener('click', function () {
    var $mural = document.querySelector(".mural");
    $mural.classList.toggle("mural--linhas");

    if ($mural.classList.contains("mural--linhas")) {
        this.textContent = 'Blocos';
    } else {
        this.textContent = 'Linhas';
    }
});

function removeCartao() {
    var cartao = document.querySelector('#cartao_' + this.dataset.ref);

    cartao.classList.add('cartao--some');

    setTimeout(function () {
        cartao.remove();
    }, 400);
}

var botoes = document.querySelectorAll('.opcoesDoCartao-remove');

botoes.forEach(function (e) {
    e.addEventListener('click', removeCartao);
});


var contador = $(".cartao").length;


$(".novoCartao").submit(function (event) {
    //impede que a pagina carregue
    event.preventDefault();

    //pega o que o usuario digitou
    var campoConteudo = $(".novoCartao-conteudo");
    var conteudo = campoConteudo.val().trim().replace(/\n/g, "<br>");
    //var conteudo = campoConteudo.val().trim().replace(/\*\*[A-z0-9]+\*\*/gi , "<b>" "</b>"); 

    //cria os elementos do cartao e adiciona no Dom
    if (conteudo) {

        //soma contador
        contador++;

        //cria o botao de remover 
        //cria o atributo data-ref no botaoRemove
        var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
            .attr("data-ref", contador)
            .text("Remover")
            .click(removeCartao);

        //cria a div de opcoes
        var opcoes = $("<div>").addClass("opcoesDoCartao")
            .append(botaoRemove);

        var tipoCartao = decideTipoCartao(conteudo);

        var conteudoTag = $("<p>").addClass("cartao-conteudo").append(conteudo);

        $("<div>").attr("id", "cartao_" + contador)
            .addClass("cartao")
            .addClass(tipoCartao)
            .append(opcoes)
            .append(conteudoTag)
            .prependTo(".mural");

    }

    //apaga o conteudo do text area
    campoConteudo.val("");
});


function decideTipoCartao(conteudo) {
    var quebras = conteudo.split("<br>").length;
    var totalDeLetras = conteudo.replace(/<br>/g, " ").length;
    var ultimoMaior = "";

    conteudo.replace(/<br>/g, " ")
        .split(" ")
        .forEach(function (palavra) {
            if (palavra.length > ultimoMaior.length) {
                ultimoMaior = palavra;
            }
        });


    var tamMaior = ultimoMaior.length;

    //no minimo todo cartao tem o texto pequeno
    var tipoCartao = "cartao--textoPequeno";

    if (tamMaior < 9 && quebras < 5 && totalDeLetras < 55) {
        tipoCartao = "cartao--textoGrande";
    } else if (tamMaior < 12 && quebras < 6 && totalDeLetras < 75) {
        tipoCartao = "cartao--textoMedio";
    }

    return tipoCartao;
}

$('.cartao--conteudo').filter(function () {
            return $(this).text().contains("Lorem");}).slideUp(300);