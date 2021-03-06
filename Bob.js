class Bob
{
    constructor( x,y,radius)
    {
        var options =
        {
           // isStatic:true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        
        this.body = Bodies.circle(x, y, (radius-10)/2, options);
      
      this.radius = 40;
      
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y)
      rotate(angle);
      rectMode(CENTER);
      strokeWeight (4);
      stroke ("black");
      fill("cyan");
      circle(0,0,this.radius);
      pop();
    }
  
    
}
