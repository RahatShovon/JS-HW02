//show date
function showDate(){
	document.getElementById('dateh2').innerHTML = Date();
}

//text change
function textChange(){
	document.getElementById('changeh2').innerHTML = "You need to change your PRIORITIES";
}

//repeat text
function repeatText(){
	var message = "To change your life, You need to change your PRIORITIES. ";
	document.getElementById('repeath2').innerHTML = message.repeat(3);
}

//bulb on/off
function bulbOn(){
	document.getElementById('bulb').src = 'images/bulbon.gif';
}
function bulbOff(){
	document.getElementById('bulb').src = 'images/bulboff.gif';
}

//sum result
function outPut(){
	let n1 = 10;
	let n2 = 5;
	n1 += n2;
	document.getElementById('op').innerHTML = n1;
}

//focus field
function onFocus(x){
	x.style.background = "yellow";
}

//key press alert
function keyPress(){
	alert("You press a key inside the field. ");
}