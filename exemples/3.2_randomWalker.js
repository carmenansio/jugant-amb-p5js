var x
var y
function setup () {
createCanvas (640,360);
background(255);
x=width/2 //x comença a la meitat de la pantalla
y=height/2 //y comença a la meitat de la pantalla
}
//dibuixa el nuestre cami aleatori a la pantalla
function walker () {
ellipse(x,y,30,30); //cap
line (x,y+15,x,y+45); //cos
line(x,y+30,x-10,y+15); //braç esquerra
line(x,y+30,x+10,y+15); //braç dreta
line(x,y+45,x-10,y+60); //pierna esquerra
line(x,y+45,x+10,y+60); //pierna dreta
}
//mou el cami aleatoriament en 4 direccions
function walk () {
var choice = parseInt (random(4));
if (choice == 0){
x++
} else if (choice == 1){
x--
} else if (choice == 2){
y++
} else {
y--
}
}
//executa un codi en un loop
function draw () {
walker()
walk()
}