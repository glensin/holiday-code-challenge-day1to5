// var myObj = new Object(),
//     str = "myString",
//     rand = Math.random(),
//     obj = new Object();
//
// myObj.type              = "Dot syntax";
// myObj["date created"]   = "String with space";
// myObj[str]              = "String value";
// myObj[rand]             = "Random Number";
// myObj[obj]              = "Object";
// myObj[""]               = "Even an empty string";
//
// console.log(myObj);


function coffeeOrder (order) {
var ingredient = {}
var orderString = order
var orderArr = orderString.split(" ")

if (orderArr[0].toString() === 'kopi') {
  ingredient.kopi = 1}
else {
  ingredient.kopi = 0}

for (var i = 0; i < orderArr.length; i++) {
  if (orderArr[i]==='kosong') {
      ingredient.sugar = 0}
  else if(orderArr[i]==='o'){
      ingredient.evaporatedMilk = false
      ingredient.condensedMilk = false}
  else if (orderArr[i]==='peng') {
      ingredient.ice = true}
  else {

      if (orderArr[i]==='si') {
      ingredient.evaporatedMilk = false
      ingredient.condensedMilk = true
      }
      else {
      ingredient.cost = "$1.50"
      ingredient.evaporatedMilk = true
      ingredient.condensedMilk = false
      ingredient.ice = false
      }
      }
}
console.log(ingredient);}

coffeeOrder("tea")
