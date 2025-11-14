const number1 = Number(prompt("Inserisci il voto numero 1: "));
const number2 = Number(prompt("Inserisci il voto numero 2: "));
const number3 = Number(prompt("Inserisci il voto numero 3: "));
const number4 = Number(prompt("Inserisci il voto numero 4: "));
const number5 = Number(prompt("Inserisci il voto numero 5: "));

const media = Number(number1 + number2 + number3 + number4 + number5) / 5;

if (
    (number1 > 0 || number1 <= 10) &&
    (number2 > 0 || number2 <= 10) &&
    (number3 > 0 || number3 <= 10) &&
    (number4 > 0 || number4 <= 10) &&
    (number5 > 0 || number5 <= 10)
)
{
    alert("La tua media è: " + media);
}

