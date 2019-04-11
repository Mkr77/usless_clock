let drag = false;
let value = 0


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(10);
    angleMode(DEGREES);

}


function draw() {
    background(value);
    let currentTime = new Date();
    let hr = currentTime.getHours();
    //currentTime.getHours().map(0,12,0, TWO_PI);
    let mn = currentTime.getMinutes();
    //currentTime.getMinutes().map(0,60,0, TWO_PI);
    let sc = currentTime.getSeconds();
    //currentTime.getSeconds () .map (0,60,0, TWO_PI);



    let secondAngle = sc.map(0, 60, 0, 360);
    let minuteAngle = mn.map(0, 60, 0, 360);
    let hourAngle = (hr % 12).map(0, 12, 0, 360);

    ///

    strokeWeight(2);

    noFill();


    stroke(255, 255, 255);

    arc((windowWidth / 2), (windowHeight / 2), 100, 800, 0, secondAngle);

    stroke(255, 255, 255);

    arc((windowWidth / 2), (windowHeight / 2), 80, 600, 0, minuteAngle);

    stroke(255, 255, 255);

    arc((windowWidth / 2), (windowHeight / 2), 60, 490, 0, hourAngle);

}
function mouseDragged() {
    value = value + 10;
    if (value > 255) {
        value = 0;
    }
}




// top
//rotate(secondAngle);

//rotate(minuteAngle);

//rotate(hourAngle);

/*
   function drawAnotherCircle() {
    strokeWeight(8);
    stroke(255, 100, 150);
    noFill();
    let secondAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secondAngle);
    rotate(secondAngle);
 
    }
 
 function drawYetAnotherCircle() {
    stroke(150, 100, 255);
   let minuteAngle = mn.map( 0, 60, 0, 360);
   arc(0, 0, 280, 280, 0, minuteAngle);
   rotate(minuteAngle);
    
 }
 
 function drawYetYetAnotherCircle() {
     
    stroke(150, 255, 100);
   let hourAngle = (hr % 12).map( 0, 12, 0, 360);
   arc(0, 0, 260, 260, 0, hourAngle);
   rotate(hourAngle);

     
     
 }
 
   //  fill(255);
   //  noStroke();
   //  text(hr + ':' + mn + ':' + sc, 10, 200);

*/
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

/*
let currentTime = new Date();

let hour = 0;
let minutes = 0;
let seconds = 0;

let b = 1;
let direction = 1;

let circle_size = 50;
let circle_x;
let circle_y;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(10);
    circle_x = windowWidth / 2;
    circle_y = windowHeight / 2;

    hour = hour();currentTime.getHours().map(0,12,0, TWO_PI);
    minutes = minute();currentTime.getMinutes().map(0,60,0, TWO_PI);
    seconds = second();currentTime.getSeconds () .map (0,3600,0, TWO_PI);
    frameRate(50);

}


function draw() {
    drawAnotherCircle();
    drawYetAnotherCircle();
    drawYetYetAnotherCircle();

    if(b >= 254 || b <= 0){
        direction = direction * -1;
    }
    b = b + direction;

}

function drawAnotherCircle() {


   circle(circle_x, circle_y, circle_size*1);
    //draw(75, hp, 'palevioletred');

}

function drawYetAnotherCircle() {

    stroke(0, 170, 255-b);
    noFill();
    circle(circle_x, circle_y, circle_size*2);
   // draw(100, mp, 'limegreen');
}

function drawYetYetAnotherCircle() {

    stroke(0, 0, 255-b);
    noFill();
    circle(circle_x, circle_y, circle_size*3);
    //draw(125, sp, 'steelblue');


}


Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}*/