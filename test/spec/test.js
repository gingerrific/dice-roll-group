/* global describe, it */
//Creating correct number of inputs using the 
//click button//
//To cause the error to occur-($)is not defined.
//To create number of fields test//
// all <input> fields only take numbers as value. Don't yet know what the 
//number of fields will be. 



//style tests//
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


	
(function () {
    'use strict';

    describe('to accept', function () {
        describe('accept input for each item', function () {
            it('should give an alert if ', function () {
              var answer = 6;
              expect(answer).to.equal(7);
            });
        });
     });
})();


