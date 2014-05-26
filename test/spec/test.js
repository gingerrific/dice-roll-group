'use strict';

//Creating correct number of inputs using the 
//click button//
//To cause the error to occur-($)is not defined.
//To create number of fields test//
// all <input> fields only take numbers as value. Don't yet know what the 
//number of fields will be. 



//style tests//


(function () {

	describe('test for the number of die', function (){
		it ('should throw an error for non-number types', function (){
			// this will test to ensure that the number entered for the die input is an actual number //
			var nAnForm;
			expect(true).to.be(0);

		});

	it ('should create the correct number of input fields for die', function () {
		// this will ensure that the quantity entered for the die is an actual number //
		expect(2).to.equal($('.dice-quantity-input').length);
	})

	it ('should check that the quantity entered is within the given range', function () {
		//this will check to see if the quantity of dice entered is within the range of numbers set //
		expect(dice).to.have.length.within(1,6);
	})
	});
})();


(function () {

	'use strict';

	describe('If it passes, player is assigned a number.diceSides', function () {
		it('should set player.dice if input valid', function () {
	
			var testInput = 10;

			// passing value to the function
			inputValue(testInput);

			// assigns number
			expect(player.diceSides).to.equal(testInput);
		});
	'use strict';

	describe('input quantity of die', function () {
		it('should create the appropriate number of die', function (){
			//instance of will assert that the target is an instance of constructor //
			var Dice = function (name) { this.name = name; }
  			, Die = new Dice('die');

  			expect(Die).to.be.an.instanceof(dice);	
		})
	});
})();




(function() {

	'use strict';

	describe("Die creation button", function(){
		it ("should create correct number of inputs", function(){
			$('.input').val(5)
			$('.button').click()

		expect($('.sides-input').length).to.equal(5)

		})
	
	it("should give an alert for nAn when creating the number of sides", function(){
			var answer=5;
			expect(answer).to.equal(NaN);

		})

	it("should alert everything is truthy when button is activated", function(){
			var answer=true;
			expect('true').to.be(false)
	})
})

})();  

	///using mason's example and tweeking it, this may work better.///

	   describe("Create Die Button", function(){
 
      // set input vaue to 7
      $('.die-sides').val('7');
      // then click the button
      $('.create-die').click();
 
      

      it("should create a die and store it in Dieglobal", function(){        
        expect(Die.sides).to.equal(7);
      });
 
      it("should create a die with sides equal the input value", function(){
        var inputVal = parseInt($('.die-sides').val())
        expect(Die.sides).to.equal(inputVal);
      });
 
    }); ///creates and stores inputs for each field.


////continue on creating die button-a different way///

	(function(){

		"use string";

	describe("Die constructor",function(){
		it("should assign a side property to instance",function(){
		var die=new Die(100)

});		expect('.die').to.property('.sides');
		expect('.die.sides').to.equal('100');
});
		//allowing the number to not turned into a string
		it("should accept a number as string",function(){
			var die=new Die("7");
			expect('die.sides').to.equal("7");
})
		it('should be hidden unless using parent', function () {
			// checks whether or not the parent is selected first.  
	    	expect($('.parent-input')).to.not.exist;
})

		  it('should increment after rolling', function() {
      expect(die.numRolls).to.equal(1)
   })
		     it("should impart a sides property to instances", function(){
        var die = new Die(10);
        expect(die).to.have.property('sides');
      });
 
     });


	describe ('')
(function () {
    'use strict';

    describe('to accept', function () {
        describe('accept input for each item', function () {
            it('should give an alert if ', function () {
              var answer = 6;
              expect(answer).to.equal(7);
            });
(function () {
	'use strict';

	describe('input quantity of die', function () {
		it('should drop down menu for die options', function (){
			//instance of will assert that the target is an instance of constructor //
			Die.prototype.dice = function(){};
			expect(Die).to.respondTo('dice');	
		})
		
		//this will check to see if the quantity of die entered is the appropriate number set //
		it('should create the appropriate quantity of die', function () {
			var diceQuantity;
			expect(diceQuantity).to.equal(2);
		})

		it ('should update the variable entered', function () {
			// this should update the variable entered with the appropriate length... not sure if this is correct//
			expect('dice').to.have.length(2);
		})
	});


	// face value tests
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

