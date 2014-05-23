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
}


	
