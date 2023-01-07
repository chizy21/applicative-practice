import { data } from "../data/data.js";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  // const planet = data.planets;
  return data.planets.filter(
    (planet) =>
      planet.hasOwnProperty("moons") && planet.moons.includes(moonName)
  )[0].name;
}
console.log(findPlanetNameByMoon(data, "Titania"));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
