"use strict";

// function Dice (diceNum, sidesNum, iteratorVal){
// 	this.sides = sidesNum;
// 	this.numberOfDice = getNum(diceNum);
// 	this.faceVal = 
// };

//generates a list from blank-99 for the dice numbers
var makeDiceAmount = function () {
 for (var i = 0; i<100;i+=1){
    $('.dice-number-input').append("<option>"+ i + "</option>");
}}

makeDiceAmount();


var getNum = function () {
	// gets the value of the dice number selector
	var diceAmount = $('.dice-number-input :selected').text();
	//intits a blank array
	var array = [];
	// depending on the number of dice selected, this will loop that many number of times and generate
	// a random number within the range of the selected number of sides.
	for (var i=0; i<diceAmount; i+=1) {
		var sides = $('.dice-sides-input-'+(i+1)+' :selected').text();
		var result = Math.floor(Math.random() * sides) + 1;
		array[i] = result
	}

	console.log(array);
		// for now, a second for loop will come through and add each 'rolled' number
		// to a corresponding <li> in the DOM. Currently only set up to link to the four 
		// created lines in the ul
		for(var j = 0; j <diceAmount; j+=1) {

			$('.dice-display-container ul li:nth-child('+ (j+1) +')').html(array[j].toString()).show();
		}
	}
	
// on click of the roll button, returns the getNum() function
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
	// clears any existing elements before adding the new selectors
	$('.interface-container ul').html('');
	// loop creates a dice selector based on the number of dice selected
	for(var i=0; i < diceAmount; i+=1) {
		var dieSidesDropdown = "<li><span>Number of Sides</span><select class=\"dice-sides-input-" + (i+1) + "\"><option></option></select></li>";
		$('.interface-container ul').append(dieSidesDropdown);
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
		$('.youRolled').html('You just rolled a ' + $('.side5').text())
	}, 2000)
})


$('.reset').click( function () {
	$('.scene').css({'transition': 'none','-webkit-transform':'rotateX(-37deg) rotateY(-18deg)'});
		var sidesAmount = parseInt($('.dice-sides-input-1 :selected').text());
		(_.range(sidesAmount+1).slice(1)).forEach(function (x,y){
		$('.side'+(y+1)).html('')
		})
		$('.dice-sides-input-1').val('');
});	