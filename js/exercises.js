var myBackground = [0,0,0];	

function backColor() {
	
		var r = myBackground[0];
		if (r > 255) {
			r -= 255;
		} else {
			r +=3
		}

		var g = myBackground[1];
		if (g > 255) {
			g -= 255;
		} else {
			g +=5
		}

		var b = myBackground[2];
		if (b > 255) {
			b -= 255;
		} else {
			b +=7
		}

		myBackground = [r, g, b];

	var color = 'rgb(' + r + ',' + g + ',' + b +')';

	document.body.style.backgroundColor = color;
}

function colorChange() {
	backColor();
	window.setInterval(backColor,1000);
}

colorChange();
	
function findClockTime() {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();

	if (hour > 12) {
		hour = hour -12;
	}
	if (hour === 0) {
		hour = 12;
	}
	if (minute < 10) {
		minute = '0' + minute;
	}
	if (second <10) {
		second = '0' + second;
	}
	var timeString = hour + ':' + minute + ':' + second;

	document.getElementById('time').innerHTML = timeString;
}

function liveTime() {
	findClockTime();
	setInterval(findClockTime,1000);
}

liveTime();

$(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('#time').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#time').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = .1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}
