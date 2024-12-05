async function listaVideos () { //criando a função assíncrona
    const conexao = await fetch("http://localhost:3000/videos"); //capturando o servidor do node.js
    const listaVideosConvertida = await conexao.json(); //fazendo a conversão de informações em bytes para json
    
    return listaVideosConvertida; //retorna as informações já convertidas
}


async function criaVideo(titulo, url, descricao, imagem) {
    const conectaVideo = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {"Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            titulo: titulo,
            url: url,
            descricao: `${descricao} mil visualizações`,
            imagem: imagem
        })    

    });
}

export const conectaApi = { //para exportar a aplicação
    listaVideos,
    criaVideo
} 
