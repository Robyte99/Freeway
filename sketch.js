function setup() {
    createCanvas(500, 400);
    somFundo.loop();
  }

  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAutor();
    voltaPosicaoInicialDoCarro();
    verificaColisao();
    incluiPontos();
    marcaPontos();
  } 




  