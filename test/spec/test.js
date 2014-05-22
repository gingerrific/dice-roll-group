/* global describe, it */


///  face value tests	
(function () {
    'use strict';

    describe('Tests for face values of the die', function () {
        it('should throw an error if the value is a non-number, including undefined and NaN', function () {

        	// checks against three different non-numbers, including NaN and undefined.
          var stringForm = function () {
          	diceFace("hi")
          }

          var nAnForm = function () {
          	diceFace(NaN)
          }

          expect(stringForm).to.throw(Error);
          expect(nAnForm).to.throw(Error);
          expect(diceFace).to.throw(Error);

        });


	    it('should create the correct number of input fields', function () {

	    	
    		diceFace(4)
	    	//will run the function with a 4 passed as an argument and thus create 4 fields

	    	expect(4).to.equal($('.dice-style-input').length);
	    })

	    it('should check that the number is within the appropriate range', function () {

	    	var rangeTest = function () {

    			diceFace(diceRoll(4), 10)
	    	}
	    	//

	    	expect(rangeTest).to.be.within(9,41);
	    })

	    it('should check that the number iterator is separate for each die', function () {

	    	var amountTest = function () {

    			diceFace(diceRoll(4), 10)
	    	}
	    	var diceAmount;
	    	// a function that will return the number of selected dice and pass how many times the funtion should be called/dice shoul be rolled

	    	expect(diceAmount).to.equal(6);
	    })

          
     });
})();


// ROLL tests
(function () {
    'use strict';
 
    describe('Roll button and results', function () {
      it('should verify that all values exists', function(){
      	
      	var checkFields = function () {
	      	$('.numDice-input :selected').text();
	      	$('.styleOfDice-input :selected').text();		
      	}	

        expect(checkFields).to.exist;
        expect(!checkFields).to.throw(Error);
        
      });
 
      it('should throw errors for non-Number types', function(){
 
        
 
        expect(nanSquare).to.throw(Error);
      });
 


    });
})();