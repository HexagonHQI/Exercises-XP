const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
  const position = index + 1; // Get position (1-based)
  console.log(`${position}# choice is ${color}.`);
});

console.log(colors.includes("Violet") ? "Yeah" : "No...");
