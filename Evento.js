var data = new Date ();
var dataDoEvento = 17/12/2021

if (dataDoEvento => new Date) {
    console.log("Evento Confirmado")
}else{
    console.log("Evento não permitido, informe uma nova data.")
}


var idadeDoParticipante = 28

if (idadeDoParticipante => 18){
    console.log("Cadastro concluído")
}else{
    console.log("Cadastro não concluído, evento para maiores de 18 anos")
}


var listaDeParticipantes = ["Arthur", "Caio", "Camille", "Fabricio", "Fernando", "Priscila", "Victor"];
var quantidadeDeParticipantes = listaDeParticipantes.length;
console.log("quantidadeDeParticipantes");

if (listaDeParticipantes.length < 100){
    //É possível cadastrar mais participantes
    console.log ("Cadastro Permitido")
}else{
    console.log ("Cadastro não permitido pois ultrapassa o limite de participantes")
}