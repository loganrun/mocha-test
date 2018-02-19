const expect = require('chai').expect;
const fizzBuzz = require('../fizzBuzzer');

describe('fizzBuzz', function(){
    
    it('should check if input is a number and throw an error if not', function(){
        
        const notNumber = [ '1', 'a', true, 'Nan'];
        
        notNumber.forEach(function(input) {
            expect(function(){
                fizzBuzz(input)}).to.throw(Error);
        });
    } );


    
});