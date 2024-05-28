// Question 1

// const arr = [2,5,3,8,4,7,6]

// arr.map((a) => {
//     console.log(a*a)
// })


// Question 2

// const studentScore = 90

// function getgrade(score){
//     return (score >= 90) ? 'A' :
//     (score >= 80) ? 'B' :
//     (score >= 65) ? 'C' :
//     (score >= 36) ? 'D' : 'F';
// }

// const grade = getgrade(studentScore)
// console.log(`The grade of student score is ${grade}.`)



// Question 3

// const car = {
//     company: 'TATA',
//     model: 'Punch',
//     year: 2020
// };

// function changeCarYear(car, newYear) {
//     car.year = newYear;
// }

// function printCarModelAndYear(car) {
//     const { model, year } = car;
//     console.log(`Model: ${model}, Year: ${year}`);
// }

// console.log("Before changing the year:");
// printCarModelAndYear(car);

// changeCarYear(car, 2022);

// console.log("After changing the year:");
// printCarModelAndYear(car);


// Question 4

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// function isPrime(num) {
//     if (num <= 1) {
//         return false; 
//     }
//     if (num <= 3) {
//         return true; 
//     }
//     if (num % 2 === 0 || num % 3 === 0) {
//         return false; 
//     }
//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) {
//             return false; 
//         }
//     }
//     return true;
// }

// function filterPrimes(arr) {
//     return arr.filter(isPrime);
// }
// const primeNumbers = filterPrimes(arr);
// console.log(`Prime numbers in the array: ${primeNumbers}`);


// Question 5

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const square = numbers.map(num =>num * num)

// const evens = numbers.filter(num => num % 2 === 0)

// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(square)
// console.log(evens)
// console.log(sum)


// Question 6

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();

//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
// fetchData();



// Question 7

const person = {
    name: 'Vikram Rathor',
    address: {
        street: '23 road new delhi',
        city: 'delhi',
        zip: '145232'
    },
    contact: {
        email: 'vikram@gmail.com',
        phone: '9685744565'
    }
};

const personWithoutContact = {
    name: 'Akshay',
    address: {
        street: 'west mumbai',
        city: 'mumbai',
        zip: '445410'
    }
};

function getPhoneNumber(person) {
    return person.contact?.phone ?? 'Phone number not available';
}

console.log(getPhoneNumber(person));
console.log(getPhoneNumber(personWithoutContact));
