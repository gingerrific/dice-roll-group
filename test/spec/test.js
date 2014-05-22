/* global describe, it */


///  face value tests	
(function () {
    'use strict';

    describe('Tests for face values of the die', function () {
        it('should throw an error if the value is a non-number, including undefined and NaN', function () {

        	// checks against three different non-numbers, including NaN and undefined.
          var stringForm;
          var nAnForm;
          

          expect(stringForm).to.throw(Error);
          expect(nAnForm).to.throw(Error);
          expect(diceFace).to.throw(Error);

        });


	    it('should create the correct number of input fields', function () {

	    	
	    	//will run the function with a 4 passed as an argument and thus create 4 fields

	    	expect(4).to.equal($('.dice-style-input').length);
	    })

	    it('should check that the number is within the appropriate range', function () {
	    	var rangeTest;
	    	//function will cause random number to stay within the accepted range

	    	expect(rangeTest).to.be.within(9,41);
	    })

	    it('should check that the number iterator is separate for each die', function () {

	    	var diceAmount;
	    	// a function that will return the number of selected dice and pass how many times the funtion should be called/dice shoul be rolled

	    	expect(diceAmount).to.equal(6);
	    })

	    it('should use the correct increment amount', function () {

	    	var stepTest;
	    	// function should increase the value of the face values and the increment between the correct amount.
	    	// in this example the increment would be 10s. d4 increment 10. Face values, 10,20,30,40. All have no remainer when divided by 10

	    	expect(stepTest).to.satisfy(function (x) {return x % 10 == 0});;
	    })

	    it('should be hidden until parent selector is applied', function () {

	    	// check whether the content being appended is within the html as it should only be created after the parent selectors contain information.
	    	expect($('.step-selector-input')).to.not.exist;

	    })
          

     });
})();


// ROLL tests
(function () {
    'use strict';
 
    describe('Roll button and results', function () {
      	it('should verify that all values exists before trigger', function(){
      		var checkFields;
      		// all fields should have a value before allowing the trigger to funciton.
      		// if they aren't, it should also throw an error
	        expect(checkFields).to.exist;
	        expect(!checkFields).to.throw(Error);
        
      	});
 
 		it('should create an object from the constructor', function () {

 			var awesomeDie;
 			// the trigger should create a new dice object from the dice constructor
 			// will simulate jquery "click" to test
        	expect(awesomeDie).to.be.an.instanceof(Dice);

        })
 		
		it('should display a value after user click', function () {

 				$('.roll-button').click();
 				//a value should be displayed and content available within the location to be a/prepended.

       	expect($('.display-field-dice-container').html()).to.exist;

       	})

		it('should trigger all of its tied functions', function () {

			
				var coolDice;
				coolDice = new Dice();
				// newly created objects should respond to the methods that are called on them

       	expect(coolDice).respondTo('rollDice');

       	})

		it('should generate the desired number of dice and appropriate results', function () {
	
			var diceNum;
			// based on the number of dice, regardless of other parameters, the display should still have the requested number of dice
       	expect(diceNum).to.equal(7);

       	})


    });
})();