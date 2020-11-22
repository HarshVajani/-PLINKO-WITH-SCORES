class Plinko{
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

        if(plinko1=null)
        {
          plinko.display();
    
          if(plinko.body.position.y >760)
          {
            if(plinko.body.position.x < 300)
            {
              score=score+500;
              plinko=null;
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