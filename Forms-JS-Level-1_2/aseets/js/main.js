
function calculateAge() {

    let currentYear = new Date().getFullYear();

    let birthYear = document.getElementById('birthYear').value;

    let age = currentYear - birthYear;

    document.getElementById('ageResult').innerHTML = "Your age is: " + age + " years.";
}
