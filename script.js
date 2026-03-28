const capa = document.querySelector(".cartao-imagem")
const titulo = document.querySelector(".cartao-conteudo h3")
const artista = document.querySelector(".artista")
const musica = document.querySelector("audio")


const dados = {
    titulo:"tempo perdido",
    artista:"seu jorge",
    capa:"./rio.jpg",
    arquivo:"pixote.mp3",


}


capa.style.background = "url('${dados.capa}') no-repeat center center / cover"
titulo.innerHTML = dados.titulo
artista.innerHTML = dados.artista
musica.src = dados.arquivo

