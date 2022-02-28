
// countCharacter

// Write a function called "countCharacter".
// Given a string input and a character, "countCharacter" returns the number of occurrences of a given character in the given string.

function countCharacter(str, char){
    if (str.length>0){
        let counter=0;
        for (let i = 0; i < str.length; i++) {
            if(str[i]===char){
                counter ++;
            }
        }return counter
        }else{
            return 0
        }

countCharacter('I am a hacker', 'a'); // --> 3


// countdown

// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array's 'zeroth' element) down to 0 (as the last element). How long is this array?

function countdown(num) {
    let arr = []
    for (let i = num; i >= 0 ; i--){
      arr.push(i)
    }
    return arr
  }

countdown(5) // [5,4,3,2,1,0]

// firstPlus

// Given an array, return the sum of the first value in the array, plus the array's length. What happens if the array's first value is not a number, but a string (like "what? " ) or a boolean (like false).


function firstPlus(arr) {
    if (isNaN(arr[0])){
      return ("wrong data")
    } else{
    const result = arr[0] + arr.length
    return result
    }
  }
}
firstPlus([2,4,7,8,9]) // 7(2+5)
//firstPlus(['asd',4,7,8,9]) //wrong data

// getLengthOfLongestElement

// Write a function called "getLengthOfLongestElement".
// Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.
// Notes:
// It should return 0 if the array is empty.

function getLengthOfLongestElement(arr) {
    let longest = 0;

  for(let i = 0; i < arr.length; i++) {
     if(arr[i].length >= longest) {
       longest = arr[i].length;
        } 
     }
  return longest;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5

// filterEvenLengthWords

// Write a function called "filterEvenLengthWords".
// Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

function filterEvenLengthWords(words) {
    const result = words.filter(words => words.length %2 ===0)
      return result
  }

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']