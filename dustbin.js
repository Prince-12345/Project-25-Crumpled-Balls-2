class dustbin{
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.width=200;
		this.height=213;
		
		var options={
			isStatic:true
		}
		
		this.image=loadImage("dustbingreen.png");

		this.bottomBody = Bodies.rectangle(this.x, this.y, this.width, 20, options);
		this.leftWallBody = Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, 20, this.height,options);
		this.rightWallBody = Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, 20, this.height,options);
		
		World.add(world, this.bottomBody);
		World.add(world, this.leftWallBody);
		World.add(world, this.rightWallBody);
	}


	display(){
		
		var posBottom=this.bottomBody.position;
		var posLeft=this.leftWallBody.position;
		var posRight=this.rightWallBody.position;

			push();
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER);
			angleMode(RADIANS);
			imageMode(CENTER);
			image(this.image, 0,-this.height/2,this.width, this.height);
			pop();
			
	}

}