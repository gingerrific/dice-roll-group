// functions that are useful and the better way to take in any number of die and their results, 
// but they work less well with the current visual elements


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
	return currentRoll.roll();
});



// corresponding CSS for these elements/functions that goes within the dice
// display container

// & ul {
//         list-style: none;
//         margin: 0;
//         padding-top: 45px;
//         padding-left: 0;
//         padding-right: 0;

//         & li {
//             margin: 20px auto 0;
//             height: 40px;
//             width:40px;
//             background: blue;
//             line-height: 40px;
//             display: none;
//         }
//     }



// related HTML that goes in the dice-display-container
  // <ul>
  //   <li></li>
  //   <li></li>
  //   <li></li>
  //   <li></li>
  // </ul>



