function averageOfEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const sumOfEvens = evenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return evenNumbers.length > 0 ? sumOfEvens / evenNumbers.length : 0;
  }
  
  
  console.log(averageOfEvenNumbers([1, 2, 3, 4, 5, 6])); 


//Longest Word
  function longestWord(words) {
    return words.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, "");
  }

  console.log(longestWord(["apple", "banana", "cherry", "blueberry"])); 
  
  
  //Average Number of Pages in Books
  function averagePages(books) {
    const totalPages = books.map(book => book.pages).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return books.length > 0 ? totalPages / books.length : 0;
  }
  
  const booksArray = [
    { title: "Book 1", author: "julia ", pages: 150 },
    { title: "Book 2", author: "Author 2", pages: 200 },
    { title: "Book 3", author: "Author 3", pages: 300 }
  ];
  
  console.log(averagePages(booksArray)); 

  //Frequency of Each String
  function stringFrequency(strings) {
    return strings.reduce((accumulator, current) => {
      accumulator[current] = (accumulator[current] || 0) + 1;
      return accumulator;
    }, {});
  }

  console.log(stringFrequency(["julia", "maroua", "julia"]));

//Count of People by City
  function countPeopleByCity(people) {
    return people.reduce((accumulator, current) => {
      accumulator[current.city] = (accumulator[current.city] || 0) + 1;
      return accumulator;
    }, {});
  }
  
  const peopleArray = [
    { name: "julia", age: 30, city: "alger" },
    { name: "mouloud", age: 40, city: "setif" },
    { name: "jiji", age: 50, city: "alger" }
  ];
  
  console.log(countPeopleByCity(peopleArray)); 
  
  
  