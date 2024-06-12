
// Function to advise clothing based on temperature and rain
function adviseClothing() {
    const temp = document.getElementById("temp").value;
    /* const isRaining = document.getElementById("rain").value; */
    const result = document.getElementById("results");

    if (!isNaN(parseFloat(temp)) && isFinite(temp)) {
        temperature = parseInt(temp);
    } else {
        // Handle invalid input
        alert("Invalid temperature input.");
        return null;
    }

    console.log(temperature);

    // Determine clothing advice based on temperature
    if (temperature >= 85) {
        result.innerHTML = "Wear shorts and a t-shirt.";
    } else if (temperature >= 70) {
        result.innerHTML = "Wear jeans and a long-sleeve shirt.";
    } else if (temperature >= 55) {
        result.innerHTML = "Wear a light jacket.";
    } else {
        result.innerHTML = "Wear a heavy coat.";
    }

    // Check if "yes" checkbox is checked
    const isRainingYes = document.getElementById("yes").checked;
    // Check if "no" checkbox is checked
    const isRainingNo = document.getElementById("no").checked;

    const isRaining = isRainingYes || (!isRainingYes && !isRainingNo);

    if (isRaining) {
        result.innerHTML = "Bring an umbrella and a rain coat";
    };
};