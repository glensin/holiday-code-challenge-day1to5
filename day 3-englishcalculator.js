// // English Calculator
// //
// // Write a function that performs a basic
// math operation expressed in words, and
// return the result in words. For example...
//  "two plus two" would return "two plus two is four"
//  "two minus one" would return "two minus one is one"
// //
// // You should at minimum support the numbers
//  zero to twenty and the operators plus, minus and times.
// //
// // Bonus
// //
// // Feel free to add more operators and support
//  any amount of numbers.
//





function switchNum(number){
  switch (number){
    case "one" :
    return(1)
      break;
    case "two":
    return(2)
      break;
    case "three":
    return(3)
      break;
    case "four":
    return(4)
        break;
    case "five":
    return(5)
        break;
    case "six":
    return(6)
        break;
    case "seven":
    return(7)
        break;
    case "eight":
    return(8)
        break;
    case "nine":
    return(9)
        break;
    case "ten":
    return(10)
        break;
    case "eleven":
    return(11)
        break;
    case "twelve":
    return(12)
        break;
    case "thirteen":
    return(13)
        break;
    case "fourteen":
    return(14)
        break;
    case "fifteen":
    return(15)
        break;
    case "sixteen":
    return(16)
        break;
    case "seventeen":
    return(17)
        break;
    case "eighteen":
    return(18)
        break;
    case "nineteen":
    return(19)
        break;
    case "twenty":
    return(20)
        break;
      default:
    console.log('default')
    break;
  }
}

function switchWord(word){
  switch (word){
    case 1 :
    return("one")
      break;
    case 2 :
    return("two")
      break;
    case 3:
    return("three")
      break;
    case 4:
    return("four")
        break;
    case 5:
    return("five")
        break;
    case 6:
    return("six")
        break;
    case 7:
    return("seven")
        break;
    case 8:
    return("eight")
        break;
    case 9:
    return("nine")
        break;
    case 10:
    return("ten")
        break;
    case 11:
    return("eleven")
        break;
    case 12:
    return("twelve")
        break;
    case 13:
    return("thirteen")
        break;
    case 14:
    return("fourteen")
        break;
    case 15:
    return("fifteen")
        break;
    case 16:
    return("sixteen")
        break;
    case 17:
    return("seventeen")
        break;
    case 18:
    return("eighteen")
        break;
    case 19:
    return("ninteen")
        break;
    case 20:
    return("twenty")
        break;
      default:
    console.log('default')
    break;
  }
}


function sum (a,b,c) {
  var product = 0
if (b==="plus"){
product = switchNum(a) + switchNum(c)
}
else if (b==="minus") {
  product = switchNum(a) - switchNum(c)
}
else if(b==="times"){
  product = switchNum(a) * switchNum(c)
}
var productOfinWords = switchWord(product)
return (a + " " + b + " " + c + " " + "is"
+" "+ productOfinWords )
}

console.log(sum("five","times","four"));
