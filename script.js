document.addEventListener("DOMContentLoaded", function(){

// 1 Botão boas-vindas
const botao = document.getElementById("botao");

if(botao){
botao.addEventListener("click", function(){
alert("Bem-vindo ao meu site desenvolvido com HTML, CSS e Javascript!");
});
}


// 2 Alterar texto
const botao1 = document.getElementById("botao1");
const texto = document.getElementById("texto");

if(botao1 && texto){
botao1.addEventListener("click", function(){
texto.innerText = "Este site possui interatividade com Javascript!";
});
}


// 3 Alterar cor
const botao2 = document.getElementById("botao2");
const corTexto = document.getElementById("corTexto");

if(botao2 && corTexto){
botao2.addEventListener("click", function(){
corTexto.style.color = "red";
});
}


// 4 Mostrar / esconder
const botao3 = document.getElementById("botao3");
const conteudo = document.getElementById("conteudo");

if(botao3 && conteudo){
botao3.addEventListener("click", function(){

if(conteudo.style.display === "none"){
conteudo.style.display = "block";
}else{
conteudo.style.display = "none";
}

});
}


// 5 Menu
const botao4 = document.getElementById("botao4");
const menu = document.getElementById("menu");

if(botao4 && menu){
botao4.addEventListener("click", function(){

if(menu.style.display === "none"){
menu.style.display = "block";
}else{
menu.style.display = "none";
}

});
}


// 6 Imagem
const imagem = document.getElementById("imagem");

if(imagem){

imagem.addEventListener("mouseover", function(){
imagem.src = "https://picsum.photos/200?random=1";
});

imagem.addEventListener("mouseout", function(){
imagem.src = "https://picsum.photos/200";
});

}

});