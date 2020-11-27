var d1;

function preload(){
    
}

function setup(){
   var canvas = createCanvas(1000,600);
   d1 = new Drop(500,10);
    
}

function draw(){
    background(0,0,0);
    d1.display();
}   