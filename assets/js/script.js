const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    //Evita que a página carregue depois de apertar o botão
    event.preventDefault();

    const peso = document.getElementById('peso').value.replace(',', '.');
    const altura = document.getElementById('altura').value.replace(',', '.');

    const imc = (peso / (altura * altura)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');
    document.getElementById('info').classList.remove('hidden');

    if(imc < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
    } else if (imc >= 18.5 && imc <= 25) {
        description = "Você está no peso ideal!";
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (imc > 25 && imc <= 30) {
        description = 'Cuidado! Você está com sobrepeso!'
    } else if (imc > 30 && imc <= 35) {
        description = 'Cuidado! Você está com obesdade moderada!'
    } else if (imc > 35 && imc <= 40) {
        description = 'Cuidado! Você está com obesidade severa!'
    } else {
        description = 'Cuidado! Você está com obesidade morbida!'
    }

    value.textContent = imc.replace('.', ',');
    document.getElementById('description').textContent = description;
});