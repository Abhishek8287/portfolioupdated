const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Front-end Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Video-editor";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Gamer";
  }, 8000);
  //1s = 1000 milliseconds
};

textLoad();
setInterval(textLoad, 12000);

//-------------------Scroll to top button---------

//to show the scroll to top(icon) when the user scroll down 20px
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollElement.style.display = "block";
  } else {
    scrollElement.style.display = "none";
  }
}

//function to move top of the website
const scrollToHead = document.getElementById("header");
const scrolltoTop = () => {
  scrollToHead.scrollIntoView({ behavior: "smooth" });
};
const scrollElement = document.getElementById("scrolltop");
scrollElement.addEventListener("click", scrolltoTop);

//-------------------------------------playing music--------------------
const audio = new Audio("music/second.mp3");
const musicElement = document.getElementById("music");
var count = 0;
const playMusic = () => {
  if (count == 0) {
    audio.play();
    count++;
  } else {
    audio.pause();
    audio.currentTime = 0;
    count = 0;
  }
};
musicElement.addEventListener("click", playMusic);
