//Codigo do ator
let yAtor = 366;
let xAtor = 80;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
    
  }

  function movimentaAutor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 2;
    }
    if (keyIsDown(DOWN_ARROW)){
     if(podeSeMover()){
      yAtor += 2;
     }
    }
}

function podeSeMover(){
  return yAtor < 366;
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length;i++){
      colisao = collideRectCircle(xCarros[i],yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
      if (colisao){
        voltaAtorYInicial();
        somColisao.play();
        if (pontosMaiorQueZero()){
        meusPontos -= 1;          
        }
      }
    }
}

function pontosMaiorQueZero(){
   return meusPontos > 0;
}

function voltaAtorYInicial(){
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25)
  fill(color(255,215,0))
  text(meusPontos, width / 4, 28);  
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtorYInicial();
    somPonto.play();
  }
}