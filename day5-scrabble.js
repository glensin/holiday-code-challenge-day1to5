function scrabble(inputRack, targetWord) {
  for (var i = 0; i < targetWord.length; i++) {
    letter = targetWord.charAt(i)
    if (inputRack.indexOf(letter) === -1) {
    if (inputRack.indexOf("?") === -1)
    return false}

    if (inputRack.indexOf(letter) === -1)
    letterIdx = inputRack.indexOf("?")
    else
    letterIdx = inputRack.indexOf(letter)
    inputRack = inputRack.slice(0, letterIdx) +
          inputRack.slice(letterIdx + 1, inputRack.length)
    }
    return true
    }
console.log(scrabble('askjehllo', 'hello'));




// function scrabble (inputString, outputString) {
//   var scrambledStr = inputString
//   var outputArr = outputString.split('')
//   var filtered = outputArr.filter(function (value, index) {
//     console.log(value + ` character will be tested against ${inputString}...`)
//     var toTest = new RegExp('[' + inputString + ']')
//     var toReturn = toTest.test(value)
//     var indexSlice = inputString.search(value)
//     if (indexSlice !== -1) {
//       console.log(value + ` found at ${indexSlice} index...`)
//     }
//     if (indexSlice === -1) {
//       console.log(value + ` was not found!! ERROR`)
//     }
//     inputString = inputString.slice(0, indexSlice) + inputString.slice(indexSlice + 1)
//     console.log(value + ' has been sliced off..')
//     // (0, indexSlice) cuts of the index from 0 to the indexSlice, while (indexSlice + 1) slices everything off AFTER the indexSlice
//     // changes the inputString into the next regex to compare with.
//     console.log('the next test will test against ' + inputString)
//     return toReturn
//     // returns once the values have been sliced off
//   })
//   console.log(`<-----------------was ${outputString} found in ${scrambledStr}???----------------->`)
//   return filtered.join('') === outputString ? true : false
// }
//
// // scrabble('ladilmy', 'daily')
// console.log(scrabble('ladilmy', 'daily'))
// console.log(scrabble('askjehllo', 'hello'))
// console.log(scrabble('astkolhhdgo', 'hotdog'))
// console.log(scrabble('aklasjlskjeohqph', 'askjoseph')
