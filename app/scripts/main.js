"use strict";

////////////////////////////////////////////////////////
//// Globals and Page Load /////////////////////////////
////////////////////////////////////////////////////////

var currentRoll;

//generates a list from blank-99 for the dice numbers
var makeDiceAmount = function () {
 for (var i = 0; i<100;i+=1){
    $('.dice-number-input').append("<option>"+ i + "</option>");
}}
// makeDiceAmount();

////////////////////////////////////////////////////////
//// Dice Constructor //////////////////////////////////
////////////////////////////////////////////////////////

function Dice ( sidesNum, iteratorVal){
	// this.roll = getNum; adding back in later, removing for testing
	this.sides = diceSides;
	// this.faceVal = // in progress
};

// on dice number selection, create a 'new' dice
$(".dice-number-input").change(function() {
	currentRoll = new Dice();
	currentRoll.sides();
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
			// loop creates a number of sides options.
			// for (var j = 0; j<101;j+=1){
			//  	   $('.dice-sides-input-'+(i+1)).append("<option>"+ j + "</option>");
			// }
		}
		// dislay the elements
		$('.interface-container ul li').show();

		//3d cube functionality 
		// if the dice input changes, rerun the makeDie function to reset the text in the cube 
		$('.dice-sides-input-1').change(function () {
			makeDie();
		})
		// $('.dice-sides-input-2').change(function () {
		// 	makeEightSide();
		// })

}

////////////////////////////////////////////////////////
//// 3D Cube functions /////////////////////////////////
////////////////////////////////////////////////////////

var makeDie = function () {
	var sidesAmount = parseInt($('.dice-sides-input-1 :selected').text());
	// takes the value passed into the selector, turns it into a number, creates a 
	// range array (without the 0) and shuffles it. once shuffled, a for each loop
	// adds each (random) value to each successive side by using the index count

	var sidesArray = _.shuffle(_.range(sidesAmount+1).slice(1))

	// if the selection is 6 or eight will create the correct 3d model
	if (sidesAmount == 6) {
		$('#tridiv').show();

		setTimeout(function () {
			sidesArray.forEach(function (x,y){
			$('.side'+(y+1)).html(x)
			})
		}, 300);
	}
	else if (sidesAmount == 8) {
		$('#tridiv2').show();

		setTimeout(function () {
			sidesArray.forEach(function (x,y){
			$('.side2-'+(y+1)).html(x)
			})
		}, 300);
	}
}


// also on the click of the roll button, the scene of the 3d cube will transition
// and 3d transform to make it look like the cube is rotating.
// after 2 seconds (the length of the roll) the result is added to the colored rectangle
$('.rollButton').click(function () {
	
	var sidesAmount = parseInt($('.dice-sides-input-1 :selected').text());

	if (sidesAmount == 6) {
		$('.scene').css({'transition': 'all 2s linear',
	    '-webkit-transform':'rotateX(863deg) rotateY(-768deg)'
		})

		setTimeout(function() {
			$('.youRolled').html('You just rolled a ' + $('.side5').text())
		}, 2000)
	}
	else if (sidesAmount == 8) {
		$('.scene2').css({'transition': 'all 2s linear',
    	'-webkit-transform':'rotateX(-544deg) rotateY(885deg) rotateZ(-503deg)'
		})

		setTimeout(function() {
			$('.youRolled').html('You just rolled a ' + $('.side2-1').text())
		}, 2000)

	}
})

// reset button will remove the scene transform, and by changing the transition property to none, cause it to 
// return instantly. it also resets the side selector to blank, as well as the divs that make up the sides of the
// 3d cube.
$('.reset').click( function () {
	$('.scene').css({'transition': 'none','-webkit-transform':'rotateX(-37deg) rotateY(-18deg)'});
	$('.scene2').css({'transition': 'none','-webkit-transform':'rotateX(-6deg) rotateY(4deg) rotateZ(0deg)'});
		var sidesAmount = parseInt($('.dice-sides-input-1 :selected').text());
		if (sidesAmount == 6) {
			(_.range(sidesAmount+1).slice(1)).forEach(function (x,y){
				$('.side'+(y+1)).html('')
				$('#tridiv').hide();
			})
		}
		else if (sidesAmount == 8) {
			(_.range(sidesAmount+1).slice(1)).forEach(function (x,y){
				$('.side2'+(y+1)).html('')
				$('#tridiv2').hide();
			})
		}
		$('.youRolled').html('');
		$('.dice-sides-input-1').val('');
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