var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function mudaCor(){
    if (currentNumber === 0) {
        currentNumberWrapper.style.color = 'red';
    }else if (currentNumber != 0){
        currentNumberWrapper.style.color = 'black';
    }
}

function limites(){
    if (currentNumber <= 0){
        document.getElementById('botao1').disabled = true;
    }else{
        document.getElementById('botao1').disabled = false;
    }

    if (currentNumber >= 10){
        document.getElementById('botao2').disabled = true;
    }else{
        document.getElementById('botao2').disabled = false;
    }
}