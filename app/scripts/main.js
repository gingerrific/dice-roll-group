"use strict";

var diceFace = function (rollAmt, iterator){};


var stepAmount = function (){};





// function Dice (diceNum, sidesNum, iteratorVal){
// 	this.sides = sidesNum;
// 	this.numberOfDice = getNum(diceNum);
// 	this.faceVal = 
// };

//generates a list from blank-99 for the side numbers
var makeSides = function() {
  for (var i = 0; i<100;i+=1){
    $('.dice-sides-input').append("<option>"+ i + "</option>");
}}

var makeDiceAmount = function () {
 for (var i = 0; i<100;i+=1){
    $('.dice-number-input').append("<option>"+ i + "</option>");
}}


makeSides();
makeDiceAmount();

var getNum = function () {
	var diceAmount = $('.dice-number-input :selected').text();
	var sides = $('.dice-sides-input :selected').text();
	var array = [];
	for (var i=0; i<diceAmount; i+=1) {
		var result = Math.floor(Math.random() * sides) + 1;
		array[i] = result
	}

	console.log(array);

		for(var j = 0; j <diceAmount; j+=1) {

			$('.dice-display-container ul li:nth-child('+ (j+1) +')').html(array[j].toString());
		}
	}
	

$('.rollButton').click(function(){
	
	return getNum();
});


//evens, odds, multiples of 1, 3, 5, 7, 10, 12, 13, 20

//odds
// for (var i = 0; i<stop; i+1){
// 	return (2*i)+1
// }

// evens
//  return 2*i

// multiples
// return i*n


