function randomH1() {
	// Set h1 colors in order
	var colors = ["#F94A4B","#1bb996","#5baddd","#d6b943"];
	var h1 = document.getElementsByTagName("h1");
	var h1array = Array.prototype.slice.call(h1); 
	for (i=0; i<h1array.length;i++) {
	  h1array[i].style.color = colors[i%colors.length];
	}
}
document.ready = randomH1();