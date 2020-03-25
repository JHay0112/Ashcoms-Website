/*
    js/main.js
    Author: Jordan Hay
*/

// Functions
// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Exit loading screen once page has loaded
async function exitLoadingScreen() {
    loadingScreen = document.getElementById("loading-screen"); // Get loading screen
    loadingSpinner = document.getElementById("loading-spinner"); // Get loading spinner
    loadingLogo = document.getElementById("loading-logo"); // Get loading logo

    loadingLogo.style.animation = "fade-out 0.5s 1s forwards ease"; // Fade out
    loadingSpinner.style.animation = "spin 1s infinite linear, fade-out 2s forwards"; // Fade out while still spinning
    loadingScreen.style.animation = "slide-out-bottom 1.3s 1.5s forwards ease-out";
    await sleep(1200);
    document.body.style.overflowY = "auto";
}

// Slideshow
async function runSlideShow() {

    images = [
        "1.jpg",
        "2.jpg"
    ];

    header = document.getElementById("header");
    pseudoHeader = document.getElementById("pseudo-header");

    imageURL = "url('img/header/";
    imageURL = imageURL.concat(images[0], "')");

    for(var i = 0; i <= images.length; i++) {

        if(i >= images.length) {
            i = 0;
        }

        pseudoHeader.style.backgroundImage = "url(\"img/header/".concat(images[i], "\")");
        await sleep(500);
        pseudoHeader.style.display = "inline-block";
        pseudoHeader.style.animation = "slideshow-slide-in 1s ease";
        await sleep(1000);
        header.style.backgroundImage = "url(\"img/header/".concat(images[i], "\")");
        pseudoHeader.style.animation = "";
        pseudoHeader.style.display = "none";
        await sleep(8000);
    }

}