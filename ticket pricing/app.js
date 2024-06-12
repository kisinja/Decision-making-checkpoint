const age = document.getElementById('age');
const result = document.getElementById('price-result');

const reasonContainer = document.getElementById("reason-result");

const checkPrice = () => {
    const ageValue = age.value;

    if (ageValue === '') {
        result.innerHTML = '$0';
        reasonContainer.innerHTML = "Please enter your age";
        return;
    }

    if (ageValue >= 18) {
        result.innerHTML = '$20';
        reasonContainer.innerHTML = "Adults pay $20";
    } else if (ageValue <= 12) {
        result.innerHTML = '$10';
        reasonContainer.innerHTML = "Children pay $10";
    } else if (ageValue >= 13 && ageValue <= 17) {
        result.innerHTML = '$15';
        reasonContainer.innerHTML = "Teenagers pay $15";
    } else {
        result.innerHTML = '$0';
        reasonContainer.innerHTML = "You are not allowed to enter the cinema :("
    }
};