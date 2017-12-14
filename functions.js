var totalRevelee=0;
class Cell{
  constructor(i,j,l) {
    this.x = i*l;
    this.y = j*l;
    this.l = l;
    this.i = i;
    this.j = j;
    this.revelee = false;
    this.bombe = false;
    this.bombe_voisine = 0;
    this.drapeau = false;
    this.win = false;
  }


  show(tot) {
    if (totalRevelee==400-tot){
      this.win = true;
    }
    stroke(0);
    noFill();
    rect(this.x, this.y, this.l, this.l);

    if(this.win){
      /*createCanvas(401,401);
      background(0,255,0);
      textAlign(CENTER);
      var str = " YOU WIN ";
      var result = str.fontcolor("red");
      noLoop();
      document.write(result);*/
      alert("YOU WIN");

    }
    if(this.drapeau){
      fill(0);
      rect(this.x, this.y, this.l, this.l);
    }
    if(this.revelee){
          if (this.bombe){
            fill(120);
            ellipse(this.x+this.l*0.5,this.y+this.l*0.5,this.l*0.5);
            }else {

              fill(200);
              rect(this.x, this.y, this.l, this.l);

              if (this.bombe_voisine > 0) {
                textAlign(CENTER);
                fill(0);
                text(this.bombe_voisine, this.x + this.l * 0.5, this.y + this.l - 6);
              }
            }
          }
  }




  contenant(x,y) {
    return (x > this.x && x < this.x + this.l && y > this.y && y < this.y + this.l);
  }

  revele() {
    this.revelee = true;
    totalRevelee=totalRevelee+1;
    if (this.bombe_voisine == 0) {
      this.remplissage();
    }
  }

  compterBombe(){
    if(this.bombe){
      this.bombe_voisine = -1;
      return;
    }
    var total = 0;
    for (var xoff = -1; xoff <= 1; xoff++) {
      var i = this.i + xoff;
      if (i < 0 || i >= ligne) continue;

      for (var yoff = -1; yoff <= 1; yoff++) {
        var j = this.j + yoff;
        if (j < 0 || j >= colonne) continue;

        var voisine = grille[i][j];
        if (voisine.bombe) {
          total++;
        }
      }
    }
    this.bombe_voisine = total;
  }

  remplissage(xoff,yoff) {
    for (var xoff = -1; xoff <= 1; xoff++) {
      var i = this.i + xoff;
      if (i < 0 || i >= ligne) continue;

      for (var yoff = -1; yoff <= 1; yoff++) {
        var j = this.j + yoff;
        if (j < 0 || j >= colonne) continue;

        var voisine = grille[i][j];
        if (!voisine.revelee){
          voisine.revele();
        }
      }
    }
  }

 drap(){
  this.drapeau = true;
 }


}


function gameOver(){
  for (var i = 0; i < ligne; i++) {
    for (var j = 0; j < colonne; j++) {
      grille[i][j].revelee = true;
    }
  }
}
