// Define the jokes
const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call fake spaghetti? An impasta!",
    "Why couldn't the bicycle stand up by itself? It was two tired!",
    "How does a penguin build its house? Igloos it together!",
    "Why did the math book look sad? Because it had too many problems!"
];

// Function to generate a random joke
function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// Generate and log a random joke
console.log(generateJoke());