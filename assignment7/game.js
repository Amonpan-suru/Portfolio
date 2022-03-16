window.onload = pageLoad;

function pageLoad(){
	var startbutton = document.getElementById("start");
	startbutton.onmousedown = startGame;
}

function startGame(){
	var allbox = document.querySelectorAll("#game-layer div");
	if(allbox.length != 0 ){
		clearScreen();
	}
	alert("Ready");
	addBox();
	timeStart();
}

function addBox(){
	var numbox = document.getElementById("numbox").value;
	document.getElementById("numbox").value = null;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.classList.add(colorDrop)
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	box.onclick = function(){
	box.parentNode.removeChild(box);
	}
}

var timer = null;
function timeStart(){
	var TIMER_TICK = 1000;	
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	second = 5;
	var x = document.getElementById('clock');
	if(timer != null)
	clearInterval(timer);
	x.innerHTML = second;
	timer = setInterval(timeCount,TIMER_TICK)

	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		second -= 1;
		x.innerHTML = second;
		if(second <= 0)
		{
			clearInterval(timer);
			clearScreen();
			alert("Game over")
		}
		if(second >= 0 && allbox.length === 0)
		{
			clearInterval(timer);
			alert("You Win!")
		}
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
	}
}


function clearScreen(){
	var allbox = document.querySelectorAll("#game-layer div");

	for (var i=0;i<allbox.length;i++){
	allbox[i].parentNode.removeChild(allbox[i]);
	}
}