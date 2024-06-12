// Function to advise clothing based on temperature and rain
function adviseClothing(temperature, isRaining) {
    let clothingAdvice = "";

    // Determine clothing advice based on temperature
    if (temperature >= 25) {
        clothingAdvice = "Wear light clothes.";
    } else if (temperature >= 15) {
        clothingAdvice = "Wear a t-shirt and jeans.";
    } else if (temperature >= 5) {
        clothingAdvice = "Wear a sweater or jacket.";
    } else {
        clothingAdvice = "Wear a heavy jacket or coat.";
    }

    // Add advice based on rain
    if (isRaining) {
        clothingAdvice += " Bring an umbrella or raincoat.";
    }

    return clothingAdvice;
}

// Function to get user input
function getUserInput() {
    const temperature = parseFloat(prompt("Enter the current temperature in Celsius:"));
    const isRainingStr = prompt("Is it raining? (yes/no)").toLowerCase();
    const isRaining = isRainingStr === "yes";

    return { temperature, isRaining };
}

// Main function
function main() {
    // Get user input
    const { temperature, isRaining } = getUserInput();

    // Advise clothing based on temperature and rain
    const clothingAdvice = adviseClothing(temperature, isRaining);

    // Display advice to the user
    console.log("Clothing Advice:", clothingAdvice);
}

// Run the program
main();
