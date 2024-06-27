const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

for (let i = 0; i < colors.length; i++) {
  const color = colors[i];
  const position = (i % 4 === 0) ? ordinal[0] : ordinal[(i % 100 - 10) % 10]; 

  console.log(`${i + 1}${position} choice is ${color}.`);
}
