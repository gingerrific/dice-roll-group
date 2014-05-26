
"use strict";

/*Tasha
"use strict";

var rollDice = function(){
	var d1 = Math.floor (Math.random ()* 6)+ 1;
	var d2 = Math.floor (Math.random ()* 6)+ 1;
	var diceTotal = d1 + d2;
	$('.die1').html(d1);
	$('.die2').html(d2);
	$('.status').html('you rolled = ' + diceTotal + '.');
}

	$('.roll').click(function() {
	rollDice();
});

var getNum = function () {
sides = $('.dice-sides-input :selected').text();
return Math.floor(Math.random() * sides) + 1
}*/



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
	// not sure if we need the below function either
	randomArray.forEach(function(number) {
		return (randomArray);
	});
}

// Reset Button Function
$('.reset').click(function() {
	$('.select-number-of-dice').val('');
	$('.select-dice-sides').val('');
	$('.container').empty();
    $('.container').append('<div class="box1">'+ number +'</div>');
});




// function Dice (diceNum, sidesNum, iteratorVal){
// 	this.sides = sidesNum;
// 	this.numberOfDice = getNum(diceNum);
// 	this.faceVal = 
// };

//generates a list from blank-99 for the side numbers

// var makeSides = function() {
//   for (var i = 0; i<100;i+=1){
//     $('.dice-sides-input').append("<option>"+ i + "</option>");
// }}

var makeSides = function() {
	for (var i = 0; i<100;i+=1){
		$('.dice-sides-input').append("<option>"+ i + "</option>");
	}
}


var makeDiceAmount = function () {
	for (var i = 0; i<100;i+=1){
		$('.dice-number-input').append("<option>"+ i + "</option>");
	}
}





makeSides();

makeDiceAmount();

var getNum = function () {
	var diceAmount = $('.dice-number-input :selected').text();

	var array = [];
	for (var i=0; i<diceAmount; i+=1) {
		var sides = $('.dice-sides-input-'+(i+1)+' :selected').text();

		var sides = $('.dice-sides-input :selected').text();
		var array = [];
		for (var i=0; i<diceAmount; i+=1) {

			var result = Math.floor(Math.random() * sides) + 1;
			array[i] = result
		}
	}

	console.log(array);

		for(var j = 0; j <diceAmount; j+=1) {

			$('.dice-display-container ul li:nth-child('+ (j+1) +')').html(array[j].toString()).show();
		}
}
	
	

$('.rollButton').click(function() {
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



$(".dice-number-input").change(function() {
	var diceAmount = $('.dice-number-input :selected').text();
	// loop creates a dice selector based on the number of dice selected
	$('.interface-container ul').html('');
	for(var i=0; i < diceAmount; i+=1) {
		$('.interface-container ul').append("<li><span>Number of Sides </span><select class=\"dice-sides-input-" + (i+1) + "\"><option></option></select></li>");
		// loop creates a number of sides options.
		for (var j = 0; j<101;j+=1){
		 	   $('.dice-sides-input-'+(i+1)).append("<option>"+ j + "</option>");
		}
	}
	// dislay the elements
	$('.interface-container ul li').show();
	$('.dice-sides-input-1').change(function () {
		makeDie();
	})

})


var makeDie = function () {
	var sidesAmount = parseInt($('.dice-sides-input-1 :selected').text());
	// var assign sides= 
	_.shuffle(_.range(sidesAmount+1).slice(1)).forEach(function (x,y){
		$('.side'+(y+1)).html(x)
	})
}


$('.rollButton').click(function () {
	// makeDie();
	$('.scene').css({'transition': 'all 2s linear',
    '-webkit-transform':'rotateX(863deg) rotateY(-768deg)'})

	setTimeout(function() {
		$('.youRolled').append('You just rolled a ' + $('.side5').text())
	}, 2000)
})

	

