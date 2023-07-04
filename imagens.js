//imagens e sons do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somFundo;
let somColisao;
let somPonto;

function preload(){
    imagemDaEstrada = loadImage("material/estrada.png")
    imagemDoAtor = loadImage("material/ator-1.png")
    imagemCarro = loadImage("material/carro-1.png")
    imagemCarro2 = loadImage("material/carro-2.png")
    imagemCarro3 = loadImage("material/carro-3.png")  
    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro3, imagemCarro2, imagemCarro]
    somFundo = loadSound("material/sons/trilha.mp3") 
    somColisao = loadSound("material/sons/colidiu.mp3") 
    somPonto = loadSound("material/sons/pontos.wav") 
  }