//import module

const fizzBuzz = require('../src/fizzBuzz');

describe('fizzBuzz function', function () {
    
    it('should be defined', function () {
        expect(fizzBuzz).toBeDefined();
      });
    it('should return "fizz" for multiples of 3', function(){
        expect(fizzBuzz(3)).toBe('fizz');
        expect(fizzBuzz(6)).toBe("fizz"); 
    });
    it('should return "buzz" for multiples of 5', function(){
        expect(fizzBuzz(5)).toBe('buzz');
        expect(fizzBuzz(10)).toBe("buzz"); 
    }); 
    it('should return "fizzbuzz" for multiples of 3 AND 5', function(){
        expect(fizzBuzz(15)).toBe('fizzbuzz');
        expect(fizzBuzz(30)).toBe("fizzbuzz"); 
    });
    it('should return the input number for any other numbers', function(){
        expect(fizzBuzz(1)).toBe(1);
        expect(fizzBuzz(2)).toBe(2); 
    });
});