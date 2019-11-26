var telaAtiva = 0, opcao = 1;
var imgMenu, imgEquipe, imgJogo;
var imgNave;
var x = 0, y = 150;
var xNave = 250, yNave = 350;

function setup() {
  createCanvas(660, 500);
}

function preload() { 
  imgMenu = loadImage('Background-4.png');
  imgEquipe = loadImage('background_old.png');
  imgJogo = loadImage('Background-3.png');
  imgNave = loadImage('F5S4.png');
}

function draw() {
  switch(telaAtiva){
    case 0:
      menu();
      break;
    case 1: 
      jogar();
      break;
    case 2:
      tutorial();
      break;
    case 3:
      equipe();
      break;
  }
}

function menu(){
  background(imgMenu);  
  textSize(70);
  fill('rgb(29, 233, 182)');
  stroke(25);
  strokeWeight(20);
  text('Strike The Figure',70, 85)
  
  fill('rgba(0, 150, 136,0.9)');
  noStroke();
  rect(130,150,400,70,100);
  
  textSize(30);
  fill(0);
  text('Jogar',285,190);
  
  fill('rgba(0, 150, 136,0.9)'); 
  noStroke();
  rect(130,250,400,70,100); 
  
  textSize(30);
  fill(0);
  text('Tutorial',280,290);
  
  fill('rgba(0, 150, 136,0.9)'); 
  noStroke();
  rect(130,350,400,70,100); 
  
  textSize(30);
  fill(0);
  text('Equipe',280,390);
  
  noFill();
  stroke(120);
  strokeWeight(10);
  rect(130,y,400,70,100);
}

function jogar(){
  
  background(imgJogo);
  image(imgNave,xNave,yNave,100,100);
  
  textSize(40);
  fill('rgb(229, 57, 53)');
  stroke(0);
  strokeWeight(5);
  text('CIRCLE',30, 50);
  
  textSize(30);
  fill('rgb(229, 57, 53)');
  stroke(0);
  strokeWeight(5);
  text('LIFE:',450, 50);
  
  noStroke();
  fill('rgb(213, 0, 0)');
  circle(550,40,30);
  circle(590,40,30);
  circle(630,40,30);
  
  if(keyIsDown(UP_ARROW)){
    if(yNave>0){
      yNave-=5;
    }
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(yNave<400){
      yNave+=5;
    }
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    if(xNave<560){
      xNave+=5;
    }
  }
  
  if(keyIsDown(LEFT_ARROW)){
    if(xNave>0){
      xNave-=5;
    }
  }
  
  if(keyIsDown(BACKSPACE)){
    telaAtiva = 0;
  }
}

function equipe(){
  background(imgEquipe);
  textSize(40);
  fill('rgb(29, 233, 182)');
  stroke(0);
  strokeWeight(6);
  text('Este jogo foi criado por: ',20,90);
  text('Pedro Leandro e Diogo Campos',20,140);
  text('Turma: 02A', 20, 190)
  text('Professor: Aquiles Burlamaqui',80,300);
  text('ECT - UFRN',200,400);
  text('2019',280,450);
}
  
function tutorial(){
  background(imgEquipe);
  textSize(40);
  fill('rgb(29, 233, 182)');
  stroke(0);
  strokeWeight(6);
  text('COMO JOGAR: ',20,90);
  text('Use as setas do teclado (↑ ↓ → ←)',20,140);
  text('para movimentar a nave e SPACE',20,190);
  text('para disparar contra os objetos',20,240);
  text('específicos que aparecerão na',20,290);
  text('parte superior esquerda, desviando',20,340);
  text('das outras e não as deixando cair',20,390);
  text('no chão.',20,440);
  
}

function keyPressed(){
  switch(telaAtiva){
    case 0:
      btnMenu();
      break;
    case 1:
      jogar();
      break; 
    case 2:
      btnEquipe();
      break;
    case 3:
      btnEquipe();
      break;
  }

}

function btnMenu(){
  if(keyCode == ENTER){
    telaAtiva = opcao;
  }
  
  if (keyCode === DOWN_ARROW) {
    if(y<345) {
      y+=100;
      if(opcao == 1){
        opcao = 2;
      }else if(opcao == 2){
        opcao = 3;
      }
    }
  } else if(keyCode === UP_ARROW){
    if(y>150) {
      y-=100;
      if(opcao == 3){
        opcao = 2;
      }else if(opcao == 2){
        opcao = 1;
      }
    }
  }
}

function btnEquipe(){
  if(keyCode == BACKSPACE){
    telaAtiva = 0;  
  }
}
