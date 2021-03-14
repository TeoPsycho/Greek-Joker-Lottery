// selectedOutOf45 = selectRandomNumbers(5, 45);
// selectedOutOf20 = selectRandomNumbers(1, 20);
// console.log(selectedOutOf45);
// console.log(selectedOutOf20);

function selectRandomNumbers(how_many_to_select, from_total_numbers) {
  var numbers = Object.keys(Array(from_total_numbers+1).fill(1)).slice(1); // numbers from 1 to from_total_numbers
  var selected_numbers = [];
  var n = from_total_numbers;
  var m = 1;
  do {
    var index_to_remove = getRandomInt(0, n - 1);
    var number = numbers.splice(index_to_remove, 1);
    selected_numbers.push(number);
    --n;
    ++m;
  } while (m <= how_many_to_select)
  return selected_numbers.flat().sort((a, b) => a - b);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default selectRandomNumbers;