document.addEventListener("DOMContentLoaded", function () {
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie"), // the DOM element that will contain the animation
    renderer: "canvas", // render type: 'svg', 'canvas', 'html'
    loop: true, // loop the animation
    autoplay: true, // start playing the animation immediately
    path: "../JS/spotter.json", // the path to the animation JSON
  });
});
