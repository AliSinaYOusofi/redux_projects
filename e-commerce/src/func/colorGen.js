export function getRandomHexColor() {
  // Generate a random integer between 0 and 16777215 (2^24 - 1)
  const randomInt = Math.floor(Math.random() * 16777216);

  // Convert the integer to a hexadecimal string
  const hexColor = '#' + randomInt.toString(16).padStart(6, '0');

  return hexColor;
}

// Example usage:
const randomHexColor = getRandomHexColor();
console.log(randomHexColor);
