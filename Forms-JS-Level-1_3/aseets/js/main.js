

function compareAges() {

    let age1 = document.getElementById('age1').value;

    let age2 = document.getElementById('age2').value;

    let ageDifference = Math.abs(age1 - age2);

    document.getElementById('ageDifference').innerHTML = "The age difference is: " + ageDifference + " years.";

}
