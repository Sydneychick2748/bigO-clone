// For each of the functions listed below, indicate the O notation as wll as your reasoning behind the answer.

// 1. Even or odd

function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } else return false;
}
//the time taken by the function remains constant, irrespective of the input size, making it O(1).

// 2. Are You Here?

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const element1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const element2 = arr2[j];
      if (element1 === element2) return true;
    }
  }
  return false;
}

//O(n^2) because of the nested structure of the loops.

// 3. Doubler

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

//0(n)  because the size of the array increases, the time taken by the function will increase linearly.

// 4. New Search

function newSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
//0(n)  the function may need to check every element in the array before finding a match, the time taken by the function will increase linearly.

// 5. Creating Pairs

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}
// the time complexity of the function is O(n^2) due to the nested loops.

// 6. Computing Fibonacci Numbers

function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i == 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

//the time complexity remains linear, O(n), as the number of iterations grows linearly with the input num.


// 7. Efficient Search

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}
  // O(log n) This halving of the search space results in a logarithmic time complexity. 

// 8. Random element

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// the time it takes for the function to execute remains constant, so it is 0(1)


// 9. Is It Prime?

function isPrime(n) {
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}
// this is 0(n) because this loop has a linear relationship with the input n. As n grows, the number of iterations in the loop also grows linearly.

// 10. Factorial of a number w/ recursion

function factorialOf(n) {
  switch (n) {
    case 0:
    case 1:
      return 1;
    default:
      return n * factorialOf(n - 1);
  }
}
//it will execute a number of operations proportional to the value of n. Therefore, the time complexity of the factorialOf function is O(n).

//( i actually got this one wrong and i kinda understand why i originally had said it was O(1) because i thought that the switch statement was like either or choice and so it will remain const time even if the n changed but gpt said i was incorrect but i still not sure why ???)