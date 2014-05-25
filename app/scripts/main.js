"use strict";

// var diceFace = function (rollAmt, iterator){};

// var diceRoll = function (sides) {
// 	return Math.floor(Math.random() * sides) + 1
// }

// var stepAmount = function (){};

// function Dice (){};



// var getNum = function () {
// 	sides = $('.dice-sides-input :selected').text();
// 	return Math.floor(Math.random() * sides) + 1
// }

// function dthrow() {
// 	var choice; 
// 	choice = Math.floor(Math.random()*6);
// }


// var rollDice = function(){
// var d1 = Math.floor (Math.random ()* 6)+ 1;
// var d2 = Math.floor (Math.random ()* 6)+ 1;
// var diceTotal = d1 + d2;
// $('.die1').html(d1);
// $('.die2').html(d2);
// $('.status').html('You Rolled a ' + diceTotal + '.');
// }

// $('.roll').click(function() {
// rollDice();
// });


// function rollDice() {
// 	var die1 = document.getElementById ("die1");
// 	var die2 = document.getElementById ("die2");
// 	var status = document.getElementById ("status");
// 	var d1 = Math.floor (Math.random () * 6) + 1;
// 	var d2 = Math.floor (Math.random () * 6) + 1;
// 	var diceTotal = d1 + d2;
// 	die1.innerHTML = d1; 
// 	die2.innerHTML = d2;
// 	status.innerHTML = "You Rolled a " + diceTotal + ".";
// 	if (d1 == d2) {
// 		status.innerHTML += "Doubles!";
// 	}
// }




// $('#die-count').change(function() {
//           var selectObj = $(this);
//           var selectedOption = selectObj.find(":selected");
//           var selectedValue = selectedOption.val();

//           var inputs1 = document.getElementById ("die1");
// 		  var inputs2 = document.getElementById ("die2");
    
//           var targetDiv = $("#inputs");
//           targetDiv.html();
//           for(var i = 0; i < selectedValue; i++) {
//             targetDiv.append($("<input />"));
//           }
//       });


// function Dice(sides, countBy) {
// 	this.sides = sides;
// 	this.countBy = countBy;

// 	this.roll = function() {
// 		return Math.floor(Math.random() * this.sides + 1 ) * this.countBy;
// 	};
// }


// function throwDice() {
// 	var randomdice = Math.round(Math.random()*5)
// }

// function Die (sides) {
//   this.quantity = parseInt(quantity);
 
//   this.roll = function(){
//     var result = Math.floor(Math.random() * this.quantity + 1 );
//     console.log('rolled 1d'+ this.quantity, " for ", result);
//     return result;
//   }
// }
 
// $('.create-die').click(function(){
//   var quantity = $('.die-quantity').val();
//   gameDie = new Die(quantity);
// })

// function Die (sides,howMany) {
//   this.sides = parseInt(sides);
//   this.howMany = howMany;
 
//   this.roll = function(){
//     var result = Math.floor(Math.random() * this.sides + 1 );

//     $('.randomnumber').text('THIS IS THE RANDOM NUMBER: ' + result);
//     return result;
//   }
// }
 
// $('.create-die').click(function(){
// 	var howMany = $('die-box').val();
//   	var sides = $('.die-box').val();
//   	gameDie = new Die(sides);
// });


// $('.reset').click(function() {
//   $('.input-of-sides').val('');
//   $('.input-how-many-dice').val('');
//   $('.die-box').val('');
// });


// var createDiceQuantity = function () {
//  for (var i = 0; i<100;i+=1){
//     $('.dice-number-input').append("<option>"+ i + "</option>");
// }}

// makeDiceAmount();

// var getNum = function () {
// 	var diceAmount = $('.dice-number-input :selected').text();

// 	var array = [];
// 	for (var i=0; i<diceAmount; i+=1) {
// 		var sides = $('.dice-sides-input-'+(i+1)+' :selected').text();
// };

function Game (sides,howMany) {
	this.diceSides = parseInt(sides);
	this.howMany = parseInt(howMany);
	this.roll = generateArray(howMany, 1, sides);
}

$('.roll-dice').click(function(){
	$('.container').empty();
	var howMany = $('.select-number-of-dice').val();
	var sides = $('.select-dice-sides').val();
	var gameDie = new Game(sides,howMany);
});

// Generate Individual Random Number
function randomNumber(min,max) {
	return (Math.round((max-min) * Math.random() + min));
}

// Generate Array of Random Numbers
function generateArray(numDice,minDiceSides,maxDiceSides) {
	var randomArray = [];
	for (var dice=0; dice<numDice; dice++) {
		randomArray[dice] = randomNumber(minDiceSides,maxDiceSides);
}

// Reset Button Function
$('.reset').click(function() {
	$('.select-number-of-dice').val('');
	$('.select-dice-sides').val('');
	$('.container').empty();
});

// not sure if we need the below function either
randomArray.forEach(function(number) {

	 $('.container').append('<div class="box1">'+ number +'</div>');
});

	return (randomArray);

}
