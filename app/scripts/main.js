
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

"use strict";
//Josh//
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

var makeDiceAmount = function () {
 for (var i = 0; i<100;i+=1){
    $('.dice-number-input').append("<option>"+ i + "</option>");
}}



makeDiceAmount();

var getNum = function () {
	var diceAmount = $('.dice-number-input :selected').text();
	var array = [];
	for (var i=0; i<diceAmount; i+=1) {
		var sides = $('.dice-sides-input-'+(i+1)+' :selected').text();
		var result = Math.floor(Math.random() * sides) + 1;
		array[i] = result
	}

	console.log(array);

		for(var j = 0; j <diceAmount; j+=1) {

			$('.dice-display-container ul li:nth-child('+ (j+1) +')').html(array[j].toString()).show();
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


$(".dice-number-input").change(function() {
	var diceAmount = $('.dice-number-input :selected').text();
	// loop creates a dice selector based on the number of dice selected
	$('.interface-container ul').html('');
	for(var i=0; i < diceAmount; i+=1) {
		$('.interface-container ul').append("<li><span>Number of Sides</span><select class=\"dice-sides-input-" + (i+1) + "\"><option></option></select></li>");
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
    '-webkit-transform':'rotateX(863deg) rotateY(-768deg)'
	})

	setTimeout(function() {
		$('.youRolled').append('You just rolled a ' + $('.side5').text())
	}, 2000)
})

	
