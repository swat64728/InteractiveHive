var primaryColor = "rgb(25, 25, 25)";
var secondaryColor = "rgb(0, 255, 0)";
var thirtiaryColor = "rgb(50, 50, 50)";

var screenHeight = window.screen.height;

const ratioFactor = 0.2;
var barHeight = screenHeight * ratioFactor;

document.documentElement.style.setProperty('--primary-color', primaryColor);
document.documentElement.style.setProperty('--secondary-color', secondaryColor);
document.documentElement.style.setProperty('--thirtiary-color', thirtiaryColor);

document.documentElement.style.setProperty('--barHeight',barHeight)
