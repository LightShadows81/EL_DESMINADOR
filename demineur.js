funcion make2DArray(cols, rows) {
	var arr = new Array(cols);
	for (var i=0; i < arr.lenght; i++){
		arr[i] = new Array(rows);
	}
}

function Cells(){
	this.bee = true;
	this.reveald = true;
	
}

var grid;
var cols = 20;
var rows = 20;

function setup() {
	createCanvas(200,200);
	grid = make2DArrow(cols;rows);
	for (var i=0; i < cols; i++){
		for (var j=0; j<rows; j++){
			grid[i][j] = new Cell();
		}
	}
} 

function draw() {
	backgound(0);
		for (var i=0; i < cols; i++){
		for (var j=0; j<rows; j++){
			grid[i][j].show();
		}
	}
}