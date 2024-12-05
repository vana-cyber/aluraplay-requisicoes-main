import { conectaApi } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]"); //seleciono o formulário através de data attributes

async function criaVideo(evento) { 
    evento.preventDefault(); //previne que a página recarregue após a submissão do formulário

    const titulo = document.querySelector("[titulo]").value; //atribui a cada uma das variáveis o valor presente no data-attribute
    const imagem = document.querySelector("[imagem]").value;
    const descricao = Math.floor(Math.random() *10).toString(); //converte a descrição para o menor número inteiro possível (o Math.floor() serve para arredondar o número)
    const url = document.querySelector("[url]").value;

    await conectaApi.criaVideo(titulo, url, descricao, imagem);
}

formulario.addEventListener("submit", evento => (criaVideo(evento))); 