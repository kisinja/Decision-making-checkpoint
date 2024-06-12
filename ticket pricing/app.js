const age = document.getElementById('age'); // get the input element
const result = document.getElementById('price-result'); // get the result element

const reasonContainer = document.getElementById("reason-result"); // get the reason container

// function to check the ticket price based on the age
const checkPrice = () => {
    const ageValue = age.value; // get the value of the input

    if (ageValue === '') { // check if the input is empty
        result.innerHTML = '$0';
        reasonContainer.innerHTML = "Please enter your age";
        return;
    }

    if (ageValue >= 18) { // check if the age is greater than or equal to 18
        result.innerHTML = '$20';
        reasonContainer.innerHTML = "Adults pay $20";
    } else if (ageValue <= 12) { // check if the age is less than or equal to 12
        result.innerHTML = '$10';
        reasonContainer.innerHTML = "Children pay $10";
    } else if (ageValue >= 13 && ageValue <= 17) { // check if the age is between 13 and 17
        result.innerHTML = '$15';
        reasonContainer.innerHTML = "Teenagers pay $15";
    } else { // if none of the conditions are met
        result.innerHTML = '$0';
        reasonContainer.innerHTML = "You are not allowed to enter the cinema :("
    }
};