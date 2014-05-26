"use strict";

////////////////////////////////////////////////////////
//// Globals and Page Load /////////////////////////////
////////////////////////////////////////////////////////

//generates a list from blank-6 for the dice numbers
var makeDiceAmount = function () {
 for (var i = 0; i<6;i+=1){
    $('.dice-number-input').append("<option>"+ i + "</option>");
}}

makeDiceAmount();

// inits a blank array to use for dice values.
var diceRoll = []

////////////////////////////////////////////////////////
//// Dice Constructor //////////////////////////////////
////////////////////////////////////////////////////////

function Dice (){
	this.sides = diceSides;
	this.sixSides = sixSidedDie;
	this.eightSides = eightSidedDie;

	// this.faceVal = // in progress
};

var sixSidedTemplate = _.template($('.sixSider').text());

var sixSidedDie = function (diceNumber) {
	return sixSidedTemplate(diceNumber);
}

var eightSidedTemplate = _.template($('.eightSider').text());

var eightSidedDie = function (diceNumber) {
	return eightSidedTemplate(diceNumber);
} 



////////////////////////////////////////////////////////
//// Dice Selection ////////////////////////////////////
////////////////////////////////////////////////////////

// on dice number selection, generate the sides selectors
$(".dice-number-input").change(function() {
	diceSides();
})


// on 'confirm' click, show the roll button to kick off new Dice creation
// make the appropriate dice based on input
$('.selectRoll').click(function () {
	$('.rollButton').addClass('hideButton');
	return makeDie();
})


////////////////////////////////////////////////////////
//// Sides selection dropdowns  ////////////////////////
////////////////////////////////////////////////////////


var diceSides = function () {

		var diceAmount = $('.dice-number-input :selected').text();
		// clears any existing elements before adding the new selectors
		$('.interface-container ul').html('');
		// loop creates a dice selector based on the number of dice selected
		for(var i=0; i < diceAmount; i+=1) {
			var dieSidesDropdown = "<li><span>Number of Sides</span><select class=\"dice-sides-input-" + (i+1) + "\"><option></option><option>6</option><option>8</option></select></li>";
			$('.interface-container ul').append(dieSidesDropdown);
		}
		// dislay the elements
		$('.interface-container ul li').show();
}

////////////////////////////////////////////////////////
//// 3D Cube functions /////////////////////////////////
////////////////////////////////////////////////////////


var makeDie = function () {
	$('.dice-display-container').html('');
	$('.youRolled').html('');
	var diceAmount = parseInt($('.dice-number-input :selected').text());

	// takes the value passed into the selector, turns it into a number which will be used to loop the sides a
	// number of times. Each loop creates a range array (without the 0)and shuffles it.
	// Once shuffled, a forEach loop adds each (random) value to each successive side by using the index count
	for(var i = 0; i < diceAmount; i+=1) {
		var rollNumber = {diceNumber: (i+1)};
		// for each sides input selector, it will create the appropriate model
		// and add in the values to the divs.
		var sidesAmount = parseInt($('.dice-sides-input-'+(i+1)+' :selected').text());
		var sidesArray = _.shuffle(_.range(sidesAmount+1).slice(1))
		if (sidesAmount == 6) {
			var dice = new Dice()
			$('.dice-display-container').append(dice.sixSides(rollNumber));
				sidesArray.forEach(function (x,y){
				$('.multiple-dice'+(i+1)+' .side'+(y+1)).html(x)
				})
			diceRoll.push(parseInt($('.multiple-dice'+(i+1)+' .side5').html()))

		}
		else if (sidesAmount == 8) {
			var dice = new Dice();
			$('.dice-display-container').append(dice.eightSides(rollNumber));
				sidesArray.forEach(function (x,y){
				$('.multiple-dice'+(i+1)+' .side2-'+(y+1)).html(x)
				})
			diceRoll.push(parseInt($('.multiple-dice'+(i+1)+' .side2-1').html()))
		}
	}
}



// also on the click of the roll button, the scene of the 3d cube will transition
// and 3d transform to make it look like the cube is rotating.
// after 2 seconds (the length of the roll) the result is added to the colored rectangle
$('.rollButton').click(function () {
	var diceAmount = parseInt($('.dice-number-input :selected').text());
	
	for(var i = 0; i < diceAmount; i+=1) {
		
		var sidesAmount = parseInt($('.dice-sides-input-'+(i+1)+' :selected').text());
		var sidesArray = _.shuffle(_.range(sidesAmount+1).slice(1))
	

		if (sidesAmount == 6) {
			$('.scene').css({'transition': 'all 2s linear',
		    '-webkit-transform':'rotateX(863deg) rotateY(-768deg)'
			})
		}
		else if (sidesAmount == 8) {
			$('.scene2').css({'transition': 'all 2s linear',
	    	'-webkit-transform':'rotateX(-544deg) rotateY(885deg) rotateZ(-503deg)'
			})
		}
	}

	var rollResult = diceRoll.reduce(function (x, y){
		return x+y
	})

	setTimeout(function() {
			$('.youRolled').append('You just rolled a ' + diceRoll.join(' + ') + ' for a total of ' + rollResult );
			$('.rollButton').removeClass('hideButton');
			$('.dice-number-input').val('');
			diceSides();
			diceRoll = [];
		}, 2000)	
})



// reset button will remove the scene transform, and by changing the transition property to none, cause it to 
// return instantly. it also resets the side selector to blank, as well as the divs that make up the sides of the
// 3d cube.
$('.reset').click( function () {
	$('.scene').css({'transition': 'none','-webkit-transform':'rotateX(-37deg) rotateY(-18deg)'});
	$('.scene2').css({'transition': 'none','-webkit-transform':'rotateX(-6deg) rotateY(4deg) rotateZ(0deg)'});

		$('.dice-display-container').html('');
		$('.rollButton').removeClass('hideButton');
		$('.youRolled').html('');
		$('.dice-number-input').val('');
		diceSides();
		diceRoll = [];
});


////////////////////////////////////////////////////////
//// Face Value Conversions ////////////////////////////
////////////////////////////////////////////////////////

//evens, odds, multiples of 1, 3, 5, 7, 10, 12, 13, 20

//odds
// for (var i = 0; i<stop; i+1){
// 	return (2*i)+1
// }

// evens
//  return 2*i

// multiples
// return i*n