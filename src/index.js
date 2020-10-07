module.exports = function toReadable (number) {
  let numbers = new Map (
    [0, 'zero'], [1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five'], [6, 'six'], 
    [7, 'seven'], [8, 'eight'], [9, 'nine'], [10, 'ten'], [11, 'eleven'], [12, 'twelve'], 
    [13, 'thirteen'], [15, 'fifteen'], [20, 'twenty'], [30, 'thirty'], [50, 'fifty'], [80, 'eighty']
  );
  if ()
  const newNumber = number.toString().split('').forEach(i => +i);
  let result = '';

  

  if (newNumber.length === 3) {
    result = `${numbers.get(newNumber[0])} hundred`;
  }
};
