var canvas = new fabric.Canvas('myCanvas')
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";
function setup() {
	canvas = createCanvas(300, 300);
	canvas.center();
	
  }
function newImage(getImage)
{
fabric.Image.fromURL(get_image, function(Img)) {
	block_image_objct =Img;
	block_image_objct.scaleToWidth(block_image_width);
	block_image_objct.scaleToHeight(block_image_height);
	block_image_objct.set({
		top:block_y,
		left:block_x
		
	});

	canvas.add(block_image_objct);
  


}

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '?') 
	{   blockX=100
		new_image('rr1.png')
		console.log("e")
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image('gr.png')
		console.log("v")
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image('yr.png')
		console.log("a")
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image('pr.png')
		console.log("r")
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image('br.png')
		console.log("i")
	}
	
}

