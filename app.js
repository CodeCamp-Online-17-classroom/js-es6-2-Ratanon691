function filterOutOdds(...numbers) {
  return numbers.filter(number => number % 2 === 0)
}

console.log(filterOutOdds(1, 2, 3, 4, 5, 6)); // [2, 4, 6]
console.log(filterOutOdds(7, 8, 9, 10, 11, 12)); // [8, 10, 12]
console.log(filterOutOdds(15, 17, 19)); // []
console.log(filterOutOdds()); // []
