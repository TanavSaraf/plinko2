const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground ,particle,division,plinko;
//array for division and plinko
var divisionG;
var plinkoG;
var score;


function setup() {
  createCanvas(480,800);
 
  engine = Engine.create();
    world = engine.world;
   ground =new Division(240,770,480,20);
   divisionG=[];
   plinkoG=[];
   score=0;
   for(var x=0;x<=480;x+=80)
   {
     
     divisionG.push(new Division(x,670,20,200));
   }
   
    for(var y=100;y<400;y+=70 )
    {
        for(var p=40;p<480;p+=50)
      {
        
        plinkoG.push(new Plinko(p,y,7))
        plinkoG.push(new Plinko(p-30,y+35,7))
        
      }
    }
    
}

function draw() {
  background(20);

  Engine.update(engine);

 
  
  drawSprites();
text(score,100,100);
  
  ground.display()

  for(var i=0 ;i<divisionG.length;i++)
  {
    divisionG[i].display();
    text(600/i,(i)*80-40,600);
  }
  for(var p =0;p<plinkoG.length;p++)
  {
    plinkoG[p].display();
  }
  
 
 if(particle)
 {
   particle.display();
    if(particle.y>600 )
    {
      if(particle.x<80 && particle.x>0)
      {
        score+=600
        particle=null;
      }else if(particle.x<160 && particle.x>80)
      {
        score+=300
        particle=null;
      }else if(particle.x<240 && particle.x>160)
      {
        score+=200
        particle=null;
      }else if(particle.x<320 && particle.x>240)
      {
        score+=150
        particle=null;
      }else if(particle.x<400 && particle.x>320)
      {
        score+=120
        particle=null;
      }else if(particle.x<480 && particle.x>400)
      {
        score+=100
        particle=null;
      }
    }
  }
 
}
    
function mousePressed()
{
  
  particle=new Particle(mouseX,0,10);
    console.log("hi")
  }
    
  
  