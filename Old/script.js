
//check se nome é diferente de vazio, null ou undefied.
if (nome) { alert("oi")} else { alert("nao")}

var pessoa = {};

pessoa.nome =  "Paulo";
pessoa.nascimento = 1983;
pessoa.falar = function(){
    console.log("Meu nome eh " + this.nome + ". Tenho " + this.idade + " anos");
}
pessoa.getIdade = function(){
    return 2017 - this.nascimento;
}
pessoa.idade = pessoa.getIdade();


pessoa.falar();


