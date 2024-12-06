import { conectaApi } from "./conectaAPI.js";

async function buscaVideo(evento) { //função assíncrona que executa uma ação quando o usuário procura um vídeo na barra de pesquisa
    evento.preventDefault(); //previne que a página seja redirecionada após o evento de clique no botão
    const busca = await conectaApi.buscaVideo(dadosPesquisa); //chama a função buscaVideo() a partir da exportação conectaApi e declara o valor de input como parâmetro
    const dadosPesquisa = document.querySelector("[data-pesquisa]").value; //captura o valor passado no input [data-pesquisa]

    console.log(busca); //irá retornar os dados referentes a pesquisa
}

const botaoPesquisa = document.querySelector("[data-pesquisa-botao]");
botaoPesquisa.addEventListener("click", evento => (buscaVideo(evento))); //ao inserir um dado e clicar no botão da barra de pesquisa, a função buscaVideo() será executada