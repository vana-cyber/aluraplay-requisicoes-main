import { conectaApi } from "./conectaAPI.js";
import { constroiCard } from "./mostrarVideos.js";

async function buscaVideo(evento) { //função assíncrona que executa uma ação quando o usuário procura um vídeo na barra de pesquisa
    evento.preventDefault(); //previne que a página seja redirecionada após o evento de clique no botão
   
    const dadosPesquisa = document.querySelector("[data-pesquisa]").value; //captura o valor passado no input [data-pesquisa]
    const busca = await conectaApi.buscaVideo(dadosPesquisa); //chama a função buscaVideo() a partir da exportação conectaApi e declara o valor de input como parâmetro
   
    while(lista.firstChild) { //enquanto houver o primeiro elemento filho da lista, ele será removido, ou seja, é um loop, pois conforme o primeiro vídeo é removido, o vídeo seguinte é considerado primeiro e também é removido
        lista.removeChild(lista.firstChild);
    }

    const lista = document.querySelector("[data-lista]"); //selecionando a lista de vídeos
    busca.forEach(elemento => lista.appendChild(constroiCard( //para cada elemento da busca, será construído um elemento filho
        elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

        if(busca.length ==0) {
            lista.innerHTML = `<h2 class="mensagem__titulo">Opa! Não encontramos o vídeo que você queria :(</h2>`
        }
}

const botaoPesquisa = document.querySelector("[data-pesquisa-botao]");
botaoPesquisa.addEventListener("click", evento => (buscaVideo(evento))); //ao inserir um dado e clicar no botão da barra de pesquisa, a função buscaVideo() será executada