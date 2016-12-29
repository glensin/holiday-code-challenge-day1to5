// // Sum String
// //
// // Write a function that takes as input a string that only contains numbers e.g. '1245'.
// Your function should take each individual character in the string and sum them together e.g. '1234' returns '13'
//
// // Bonus
// //
// // Allow the string to include negative values e.g. '12-23' returns '4'
//
//
// var stringNum = '9000'
// function sumAllNum () {
// var numArr = stringNum.split('')
// var num = numArr.map(function (item, index) {
// return parseInt(item) })
// //
// // console.log(num)
// var sumArr = 0
// for (var i = 0; i < num.length; i++) {
// sumArr += num[i] }
// return sumArr }
// console.log(sumAllNum())

var stringNum = '1234'
function sumAllNum () {
var numArr = stringNum.split('')
var num = numArr.map(function (item, index) {
return parseInt(item) })

console.log(num)
var sumArr = 0
for (var i = 0; i < num.length; i++) {
sumArr += num[i] }
return sumArr }
console.log(sumAllNum())

var str = "12-23"

function sumAllNum1 (){
var Arr= str.match(/-[0-9]|[0-9]/g)
var number = Arr.map(function (item, index) {
return parseInt(item) })
// console.log(number);

var sumArr1 = 0
for (var i = 0; i < number.length; i++) {
sumArr1 += number[i] }
return sumArr1 }

console.log(sumAllNum1())

// var array = str.split("")
//
//ß
// function newArray () {
// for(var i =0; i < array.length; i++){
// if (array[i].match(/\W/g)){
// return array[i] + array[i+1]
// }
// }
// }
// console.log(newArray())
// -2
