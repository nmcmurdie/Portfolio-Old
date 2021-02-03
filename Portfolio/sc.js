const shapes = ['x', 'circle', 'square'];
const SHAPE_MIN_DIST = screen.availWidth / 5, SHAPES = 5;
var shapeXPositions = [], shapeYPositions = [];

window.addEventListener("DOMContentLoaded", startup);

function startup() {
	for (let i = 0; i < SHAPES; i++) generateShape(i);
}

function generateShape(index) {
	var container = document.getElementById("shapes"), shape = document.createElement("div"), type = shapes[index % 3], x, y;
	shape.classList.add("shape", type);
	x = Math.random() * screen.availWidth;
	y = Math.random() * screen.availHeight * .25;
	for (let i = 0; i < shapeXPositions.length; i++) {
		var dist = Math.sqrt(Math.pow(x - shapeXPositions[i], 2) + Math.pow(y - shapeYPositions[i], 2));
		if (dist <= SHAPE_MIN_DIST) {
			x = Math.random() * screen.availWidth;
			y = Math.random() * screen.availHeight * .25;
			i = 0;
		}
	}
	shapeXPositions.push(x);
	shapeYPositions.push(y);
	shape.style.left = Math.round(x) + "px";
	shape.style.top = Math.round(y) + "px";
	if (type !== 'circle') shape.style.transform = "rotate(" + Math.round(Math.random() * 360) + "deg)";
	container.appendChild(shape);
}