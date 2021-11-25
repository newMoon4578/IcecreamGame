var background, backgroundImg;
var blue_scoop, blue_scoopImg, brown_scoop, brown_scoopImg, green_scoop, green_scoopImg, pink_scoop, pink_scoopImg, white_scoop, white_scoopImg;
var scoops,scoopGroup;
var cone, coneImg;
var order, orderImg;
var score;

function preload(){
    backgroundImg = loadImage("assets/background.jpg")
    blue_scoopImg = loadImage("assets/blue_scoop.png")
    brown_scoopImg = loadImage("assets/brown_scoop.png")
    coneImg = loadImage("assets/cone.png")
    green_scoopImg = loadImage("assets/green_scoop.png")
    orderImg = loadImage("assets/order.png")
    pink_scoopImg = loadImage("assets/pink_scoop.png")
    white_scoopImg = loadImage("assets/white_scoop.png")

    scoopGroup = new Group();
}

function setup(){
createCanvas(windowWidth, windowHeight)

cone = createSprite(width/2,height/2 + 250,10,10)
    cone.addImage("cone",coneImg)
    cone.scale = 0.3
}

function draw(){
    background(backgroundImg)

    cone.x = World.mouseX

    drawSprites()
}

game(){
    //change to icecream
    if (frameCount % 20 === 0) {
    scoops = createSprite(random(100, 1000), 0, 100, 100);
    scoops.velocityY = 6;
    var rand = Math.round(random(1,5));
    switch(rand){
        case 1: scoops.addImage("scoop1", blue_scoopImg);
        break;
        case 2: scoops.addImage("scoop1", brown_scoopImg);
        break;
        case 3: scoops.addImage("scoop1", green_scoopImg);
        break;
        case 4: scoops.addImage("scoop1", pink_scoopImg);
        break;
        case 5: scoops.addImage("scoop1", white_scoopImg);
        break;
    }
    scoopGroup.add(scoops);
        
    }
}