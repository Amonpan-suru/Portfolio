window.onload = pageLoad;

function pageLoad(){
  document.getElementById("defaultOpen").click();
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

function boxtothetop() {
    var windowTop = $(window)
      .scrollTop();
    var top = $('#boxHere')
      .offset()
      .top;
    if(windowTop > top) {
      $('#boxThis')
        .addClass('box');
      $('#boxHere')
        .height($('#boxThis')
          .outerHeight());
    } else {
      $('#boxThis')
        .removeClass('box');
      $('#boxHere')
        .height(0);
    }
  }
  $(function() {
    $(window)
      .scroll(boxtothetop);
    boxtothetop();
  });

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
 