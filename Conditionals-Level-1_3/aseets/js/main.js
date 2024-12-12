
document.getElementById('ageForm').addEventListener('submit', function(event) {
 event.preventDefault();

    
    let age = document.getElementById('ageInput').value;
    let result;

 
    if (age >= 18) {
   result = "Ja, Du kannst Shisha rauchen"; 
    } else {
  result = "Du darfst noch nicht Shisha rauchen"; 
  }

  
  document.getElementById('ageResult').innerHTML = result;
});

