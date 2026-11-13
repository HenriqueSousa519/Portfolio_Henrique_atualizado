/* saudação para o usuario */
const agora = new Date(); //pega a data e a hora do computador
const hora=agora.getHours(); //extrai só a hora
console.log("Hora atual:"+hora); //exibe a hora no console

let mensagem; //mensagem de saudação ao usuario

//verifica qual a saudação adequada
if(hora<12){
mensagem = "bom dia";
} else if(hora <18){
    mensagem = "boa tarde";
} else{
    mensagem = "boa noite";
}

//const saudacao=document.querySelector("#saudacao"); //localiza o paragrafo no html
//audacao.textContent= mensagem; //exibe a mensagem no paragrafo
document.getElementById("saudacao").textContext=mensagem;

/*MENU HAMBURGUER*/
const botaoMenu = document.querySelector(".menu-toggle"); // Localiza o botão ☰
const menu = document.querySelector(".menu"); // Localiza o menu de links
 
// "Quando o botão for clicado, execute esta função"
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto"); // Se a classe "aberto" não existe, adiciona; se existe, remove
});
 
// Bônus: fechar o menu ao clicar em um link
const links = document.querySelectorAll(".menu a"); // Localiza TODOS os links do menu
 
links.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto"); // Remove a classe: o menu se fecha
  });
});