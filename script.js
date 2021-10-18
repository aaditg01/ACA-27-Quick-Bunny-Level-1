function preload() {
  
}
  
  function setup() {
    createCanvas(600,600);
    edges=createEdgeSprites();
    bunny= createSprite(40,550,30,30);
    carrot= createSprite(560,40,30,30);
    obs1= createSprite(500,320,100,20);
    obs2= createSprite(300,320,100,20);
    obs3= createSprite(100,320,100,20);
    obs4= createSprite(200,400,100,20);
    obs5= createSprite(400,400,100,20);
    obs6= createSprite(600,400,100,20);
  }
  
  function draw() {
    background("black"); 
    bunny.bounceOff(edges[0]); 
    bunny.bounceOff(edges[1]); 
    bunny.bounceOff(edges[2]);   
    bunny.bounceOff(edges[3]);
    if (keyDown("up")){
      bunny.y=bunny.y-3
    }
    if (keyDown("down")){
      bunny.y=bunny.y+3
    }
    if (keyDown("left")){
      bunny.x=bunny.x-2
    }
    if (keyDown("right")){
      bunny.x=bunny.x+2
    } 
    if(bunny.isTouching(carrot)){
      text("YOU WIN!",200,200)
    }
    if(bunny.isTouching(obs1)){
      text("YOU LOSE!",200,200)
      bunny.x=40
      bunny.y=550
    }
    if(bunny.isTouching(obs2)){
      text("YOU LOSE!",200,200)
      bunny.x=40
      bunny.y=550
    }
    if(bunny.isTouching(obs3)){
      text("YOU LOSE!",200,200)
      bunny.x=40
      bunny.y=550
    }
    if(bunny.isTouching(obs4)){
      text("YOU LOSE!",200,200)
      bunny.x=40
      bunny.y=550
    }
    if(bunny.isTouching(obs5)){
      text("YOU LOSE!",200,200)
      bunny.x=40
      bunny.y=550
    }
    if(bunny.isTouching(obs6)){
      text("YOU LOSE!",200,200)
      player.x=40
      player.y=550
    }
    bunny.shapeColor="white";
    carrot.shapeColor="pink";
    obs1.shapeColor="red";
    obs2.shapeColor="red";
    obs3.shapeColor="red";
    obs4.shapeColor="red";
    obs5.shapeColor="red";
    obs6.shapeColor="red";
    drawSprites();
  }
  
  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
