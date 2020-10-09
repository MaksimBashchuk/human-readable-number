module.exports = function toReadable (number) {
  const nums = new Map([['1', 'one'], ['2', 'two'], ['3', 'three'], ['4', 'four'], ['5', 'five'], ['6', 'six'], ['7', 'seven'], 
    ['8', 'eight'], ['9', 'nine'], ['10', 'ten'], ['11', 'eleven'], ['12', 'twelve'], ['13', 'thirteen'], ['14', 'fourteen'], ['15', 'fifteen'], 
    ['16','sixteen'], ['17','seventeen'], ['18','eighteen'], ['19','nineteen'], ['20', 'twenty'], ['30', 'thirty'], 
    ['40','forty'], ['50', 'fifty'], ['60','sixty'], ['70','seventy'], ['80', 'eighty'], ['90','ninety']]);
  if (number === 0) return 'zero';
  let arrNumber = [];
  arrNumber[0] = parseInt(number / 100).toString();
  arrNumber[1] = (parseInt(number / 10) % 10).toString();
  arrNumber[2] = number.toString().slice(-1);
  let result ='';
  
  result += arrNumber[0] !== '0' ? `${nums.get(arrNumber[0])} hundred` : '';
  result += arrNumber[1] !== '0' && arrNumber[1] !== '1' ? ` ${nums.get(arrNumber[1] + 0)}` : '';
  result += arrNumber[1] === '1' && arrNumber[2] !== '0' ? ` ${nums.get(arrNumber[1] + arrNumber[2])}` : '';
  result += arrNumber[1] === '1' && arrNumber[2] === '0' ? ` ${nums.get(arrNumber[1] + arrNumber[2])}` : '';
  result += arrNumber[2] !== '0' && arrNumber[1] !== '0' && arrNumber[1] !== '1' ? ` ${nums.get(arrNumber[2])}` : '';
  result += arrNumber[2] !== '0' && arrNumber[1] === '0' ? ` ${nums.get(arrNumber[2])}` : '';

  return result.trim();
};