function generate(){

    number1 = document.getElementById("field1").value;
    number2 = document.getElementById("field2").value;

    amountOfRandomNumbers = parseInt(number2) - parseInt(number1) + 1;
    console.log(number1 + " : " + number2);

    randomNumber = Math.floor(Math.random() * amountOfRandomNumbers);

    document.getElementById("randomNumber").innerHTML = randomNumber;
}