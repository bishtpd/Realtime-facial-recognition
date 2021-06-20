function setup(){
    canvas = createCanvas(500, 300);
    canvas.position(700, 525);
    cmra = createCapture(VIDEO);
    cmra.hide();
    
}
function draw(){
    image(cmra, 0, 0, 500, 300);
    

}

