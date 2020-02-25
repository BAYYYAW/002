function myFunction() {
  var x = document.getElementById("navbar");
  if (x.style.width === "200px") {
    x.style.width = "0px"
  } else {
    x.style.width = "200px"
  }
}

function myFunction1() {
  var q = document.getElementById("navbar1");
  if (q.style.height === "100%"){
      q.style.height = "0%"
  } else {
      q.style.height = "100%"
  }
}

var y = document.getElementById("btn");
var z = document.getElementById("navbar");
var w = document.getElementById("btn1");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 90) {
    y.style.bottom = "20px";
    y.style.opacity = "1";
    z.style.opacity = "1";
  } else {
    y.style.bottom = "-200px";
    y.style.opacity = "0";
    z.style.opacity = "0";
  }
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    w.style.top = "670px";
  } else {
    w.style.top = "20px";
  }
}
