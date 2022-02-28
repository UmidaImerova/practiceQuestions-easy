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

function countdown(num) {
    let arr = []
    for (let i = num; i >= 0 ; i--){
      arr.push(i)
    }
    return arr
  }

countdown(5) // [5,4,3,2,1,0]`

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



function filterEvenLengthWords(words) {
    const result = words.filter(words => words.length %2 ===0)
      return result
  }

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']