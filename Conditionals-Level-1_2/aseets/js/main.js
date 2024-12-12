
function weather() {
  
    let quality = document.getElementById('weatherQuality').value;
    let result;

    
    if (quality >= 8 && quality <= 10) {
        result = "super";
    } else if (quality >= 6 && quality <= 7) {
        result = "gut";
    } else if (quality >= 3 && quality <= 5) {
        result = "okay";
    } else if (quality >= 0 && quality <= 2) {
        result = "schlecht";
    } else {
        result = "Invalid input. Please enter a number between 0 and 10.";
    }

    
    document.getElementById('weatherResult').innerHTML = "Weather quality is: " + result;
}

