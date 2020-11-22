class Particle{
    constructor(x,y,r){

        var options={
            restitution:0.4
        }
        this.r=r;

        this.body = Bodies.circle(x,y,this.r,options);
        this.colour=colour(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);

    }
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;

        if(particle1=null)
        {
          particle.display();
    
          if(particle.body.position.y >760)
          {
            if(particle.body.position.x < 300)
            {
              score=score+500;
              particle=null;
              if(count>= 5) gameState ="end";
            }
          }
    
        }  
       if(particle1=null)
    {
      particle.display();

      if(particle.body.position.y >760)
      {
        if(particle.body.position.x < 301)
        {
          score=score+600;
          particle=null;
          if(count>= 5) gameState ="end";
        }
      }

    }
    if(particle1=null)
    {
      particle.display();

      if(particle.body.position.y >760)
      {
        if(particle.body.position.x < 601)
        {
          score=score+900;
          particle=null;
          if(count>= 5) gameState ="end";
        }
      }

    }

        push();
        translate(ppos.x,pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.colour)
        ellipseMode(RADIUS);
        ellipse(0,0,t.r,this.r);
        pop();
    }
}

