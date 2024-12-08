import { conectaApi } from "./conectaAPI.js"; //importando a lista de vídeos convertida

const lista = document.querySelector("[data-lista]"); //selecionando data-attributes da ul dos vídeos

export function constroiCard(titulo, descricao, url, imagem) { //construindo card para carregar os vídeos
    const videos = document.createElement("li"); //associando um elemeto li para cada vídeo
    videos.className = "videos-item"; // associando uma classe para cada video
    videos.innerHTML = `<li class="videos__item">
            <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
        </li>` //entrando no elemento html para aplicar as template strings

    return videos; //retorna a constante declarada anteriormente    
}

async function listaVideos() { 
    
    try {
    const listaApi = await conectaApi.listaVideos(); //fazendo a conexão com a api dos videos
    listaApi.forEach(elemento => (lista.appendChild(constroiCard //declarando valor para cada elemento da api e a partir dela construindo um card de video
        (elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))));
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Opa! Não foi possível carregar os vídeos. Tente recarregar a página.</h2>`;
    }
}

listaVideos();