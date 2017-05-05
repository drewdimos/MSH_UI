jQuery(document).ready(function($) {

var date = new Date();

function startTime() {

	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	m = checkTime(m);
	s = checkTime(s);

	document.getElementById('time').innerHTML = 
	h + ':' + m + ':' + s;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) { i = '0' + i };
	return i;
}

document.getElementById('date').innerHTML = date.toDateString();

new WOW().init();

window.onload = startTime();


document.foundation();

});