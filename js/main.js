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