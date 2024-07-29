function averageOfEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const sumOfEvens = evenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return evenNumbers.length > 0 ? sumOfEvens / evenNumbers.length : 0;
  }
  
  
  console.log(averageOfEvenNumbers([1, 2, 3, 4, 5, 6])); 
  