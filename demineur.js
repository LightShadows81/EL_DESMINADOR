var totalBombes = 10;
var grille = new Array();
var l = 20;
var colonne = 10;
var ligne = 10;
var totalBees = 3;

function setup(){
  createCanvas(401,401);
  background(50,50,50);
  noStroke();
  initialise();

  var options = [];
  for (var i = 0; i < ligne; i++) {
    for (var j = 0; j < colonne; j++) {
      options.push([i, j]);
    }
  }

  for (var n = 0; n < totalBees; n++) {
    var index = floor(random(options.length));
    var choice = options[index];
    var i = choice[0];
    var j = choice[1];
    // Deletes that spot so it's no longer an option
    options.splice(index, 1);
    grille[i][j].bombe = true;
  }

  for (var i = 0; i < ligne; i++) {
    for (var j = 0; j < colonne; j++) {
      grille[i][j].compterBombe();
    }
  }

}

function initialise(){
  for(var i=0; i<ligne; i++){
		grille[i] = new Array();
	}
  for(var i=0; i<ligne; i++){
		for(var j=0; j<colonne; j++){
				grille[i][j] = new Cell(i,j,l);
		}
	}

}

function mousePressed() {
  for (var i = 0; i < ligne; i++) {
    for (var j = 0; j < colonne; j++) {
      if (grille[i][j].contenant(mouseX, mouseY)) {
        grille[i][j].revele();

        if(grille[i][j].bombe){
          gameOver();
        }
      }
    }
  }
}

function keyPressed() {
  if (keyCode = ENTER){
    for (var i = 0; i < ligne; i++) {
      for (var j = 0; j < colonne; j++) {
        if (grille[i][j].contenant(mouseX, mouseY)) {
          grille[i][j].drap();
          grille[i][j].revele();
        }
      }
    }
  }
}


function draw() {
  background(255);
  for (var i = 0; i < ligne; i++) {
    for (var j = 0; j < colonne; j++) {
      grille[i][j].show();
    }
  }
}
