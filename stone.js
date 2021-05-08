class Stone{
	constructor(x,y,width,height){


    
	


	var options={
		'density':0.8,
		'friction': 0.5,
	    'restitution':0.8

	}
this.x=x;
this.y=y;
this.width=width;
this.height=height;

		this.body=Bodies.rectangle(x, y, width,height,options)
		World.add(world, this.body);

}
	display()
	{
			
			rectMode(CENTER)
			
			push()
			fill("red");
			
		rect(this.body.position.x,this.body.position.y,this.width,this.height)	
		pop()
	}
}
