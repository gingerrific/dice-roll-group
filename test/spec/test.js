/* global describe, it */
//Creating correct number of inputs using the 
//click button//
//To cause the error to occur-($)is not defined.
//To create number of fields test//
// all <input> fields only take numbers as value. Don't yet know what the 
//number of fields will be. 

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
			expect(answer).to.equal(nAn);

		})

	})

})();  

//Dice

diceStyle=function(){
	append(x)div
	$('.numDiceVal').val(function(){
		diceStyle();
		diceFaceVal();
	
}

	it('should update associated fields')
















/*(function() {

  	describe('roll', function() {

    it('should have check for each die', function() {
      expect(roll.length).to.equal(6)

      roll = new Dice(10).roll();
      expect(roll.length).to.equal(10)
    }

    it('should return number', function() {
      expect(roll[0]).to.be.a('number')
    })
})
});*/

/*(function () {
    'use strict';

    describe('to accept', function () {
        describe('accept input for each item', function () {
            it('should give an alert if ', function () {
              var answer = 6;
              expect(answer).to.equal(7);
            });
        });
     });
})();*/
