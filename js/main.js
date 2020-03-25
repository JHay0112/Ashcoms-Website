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

    header = document.getElementById("header");
    pseudoHeader = document.getElementById("pseudo-header");

    imageURL = "url('img/header/";
    imageURL = imageURL.concat(1, "')");

    for(var i = 1; i <= 14; i++) {

        if(i >= 14) {
            i = 1;
        }

        pseudoHeader.style.backgroundImage = "url(\"img/header/".concat(i, ".jpg\")");
        await sleep(500);
        pseudoHeader.style.visibility = "visible";
        pseudoHeader.style.animation = "slideshow-new-slide 1s ease";
        await sleep(1000);
        header.style.backgroundImage = "url(\"img/header/".concat(i, ".jpg\")");
        pseudoHeader.style.animation = "";
        pseudoHeader.style.visibility = "hidden";
        await sleep(8000);
    }

}