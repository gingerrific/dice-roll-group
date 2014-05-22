/* global describe, it */

(function () {
	'use strict';

	describe('test for the number of die', function (){
		it ('should throw an error for non-number types', function (){
			// this will test to ensure that the number entered for the die input is an actual number //
			var nAnForm;
			expect(nAnForm).to.throw(error);

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

	describe('input quantity of die', function () {
		it('should create the appropriate number of die', function (){
			//instance of will assert that the target is an instance of constructor //
			var Dice = function (name) { this.name = name; }
  			, Die = new Diece('die');

  			expect(Die).to.be.an.instanceof(dice);	
		})
	});
})();


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
})();
