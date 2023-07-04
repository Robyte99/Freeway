//codigo dos carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 260, 318];
let velocidadeCarros = [6, 3.5, 3.1, 5, 3.3, 2.1];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    image(imagemCarros[i],xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);  
  }   
    
}

  function movimentaCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
    }
    }

    function voltaPosicaoInicialDoCarro(){
      for(let i = 0; i < imagemCarros.length; i ++){
          if(passouTodaATela(xCarros[i])){
                  xCarros[i] = 600;
          }
      }
  }
  
  function passouTodaATela(xCarro){
      return xCarro < - 50;
  }
