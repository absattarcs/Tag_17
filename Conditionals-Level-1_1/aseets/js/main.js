
function adult() {
    
    let age = document.getElementById('ageInput').value;
    let result;
    
   
    if (age >= 18) {
        result = "over 18"; 
    } else {
        result = "Under 18"; 
    }

   
    document.getElementById('ageResult').innerHTML = result;
}
