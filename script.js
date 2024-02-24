const userInput = document.getElementById('userInput');
const ctoF = document.getElementById('CtoF');
const ftoC = document.getElementById('FtoC');
const submitBTN = document.getElementById('submitBTN');
const result = document.getElementById('result');



submitBTN.onclick = function () {

    let input= Number(userInput.value);   

    if(ctoF.checked) {
        fahrenheit = ((9/5 * input)+32);
        result.textContent= fahrenheit +' \u00B0F';
    }

    else if(ftoC.checked) {
        celsius = (5/9 * (input-32));
        result.textContent = celsius +' \u00B0C'
    }
    else {
        result.textContent = 'You must select a unit!'
    }
}




