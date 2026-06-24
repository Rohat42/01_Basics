function generate(){

    number1 = parseInt(document.getElementById("field1").value);
    number2 = parseInt(document.getElementById("field2").value);

    randomNumber =
    Math.floor(Math.random() * (number2 - number1 + 1))
    + number1;

    document.getElementById("randomNumber").innerHTML = randomNumber;
}