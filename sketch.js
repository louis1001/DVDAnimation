let logo
let bounceIndex = 0

const logoSpd = 10

let logoVel
let logoPos

let logoSize

let colors = ['#0014e0', '#bb11a0', '#72bf44', '#f6ff00']

function preload(){
	loadImage("Logo.png", (i)=>{
		logo = i
	})
}

function incrementBounce(){
	bounceIndex = (bounceIndex+1)%colors.length
}

function setup(){
	createCanvas(800, 400)

	logoSize = createVector(2286/10, 1048/10)

	logoVel = createVector(random(), random())
	logoVel.setMag(logoSpd)

	logoPos = createVector(width/2, height/2)

}

function draw(){
	background(0)
	noSmooth()
	tint(colors[bounceIndex])
	image(logo, logoPos.x, logoPos.y, logoSize.x, logoSize.y)

	logoPos.add(logoVel)

	if(logoPos.x + logoSize.x > width){
		logoPos.x = width - logoSize.x
		logoVel.x *= -1
		incrementBounce()
	} else if(logoPos.x < 0){
		logoPos.x = 0
		logoVel.x *= -1
		incrementBounce()
	}

	if(logoPos.y + logoSize.y > height){
		logoPos.y = height - logoSize.y
		logoVel.y *= -1
		incrementBounce()
	} else if(logoPos.y < 0){
		logoPos.y = 0
		logoVel.y *= -1
		incrementBounce()
	}

}