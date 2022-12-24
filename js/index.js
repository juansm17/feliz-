let timer;
let startRelationDate = new Date(2022, 10, 09);
let counterImg = 0;
let togetherCounter = 1;

$(document).ready(function () {
  getTime();
  //alert("Hola mi vecina, quiero que disfrutes el scrolleo, así que en cada parte blanca tendrás que pasar el mouse para ver el mensaje oculto");
  $(".congratulation-image").hover(function () {
    counterImg++;
    if (counterImg % 1 == 2) {
      $(this).attr("src", "img/otaku.jpg");
    } else if (counterImg % 3 ==1) {
      $(this).attr("src", "img/otaku2.jpg");
    }else if (counterImg % 4 ==1){
      $(this).attr("src", "img/otaku3.jpg");
    }else if (counterImg % 5 ==1){
      $(this).attr("src", "img/otaku4.jpg");
    } else if (counterImg % 6==2){
      $(this).attr("src","img/otaku5.jpg");
    } else if (counterImg % 7==1){
      $(this).attr("src","img/otaku6.jpg");

    }
  });
  for (let i = 1; i < 51; i++) {
    $("#section" + i).hover(function () {
      $("#section" + i + " div").removeClass("hidden");
      $("#section" + i + " div").addClass("fadeInLeft");
    });
  }
  changeTogetherImage();
});

function getTime() {
  timer = setInterval(function () {
    timeTogether(startRelationDate);
  }, 1000);
}

function changeTogetherImage() {
  setInterval(function () {
    if (togetherCounter == 51) {
      togetherCounter = 0;
    }
    togetherCounter++;
    $(".together").attr("src", "img/juntos" + togetherCounter + ".jpg");
    console.log(togetherCounter);
  }, 2500);
}



function timeTogether(startRelationDate) {
  let now = new Date();
  let difference = now.getTime() - startRelationDate.getTime();

  if (difference <= 0) {
    clearInterval(timer);
  } else {
    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    //Set the text into each span
    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}