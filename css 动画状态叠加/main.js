var isPlaying = false;

var container = document.querySelector(".container");
var disk = container.querySelector(".disk");


disk.addEventListener("click", function bindEvent() {
  isPlaying ? pause() : play();
});

function pause() {
  isPlaying = false;
  var dTransform = getComputedStyle(disk).transform;
  var cTransform = getComputedStyle(container).transform;
  container.style.transform =
    cTransform === "none" ? dTransform : dTransform.concat(" ", cTransform);
  disk.classList.remove("active");
}

function play() {
  isPlaying = true;
  disk.classList.add("active");
}

