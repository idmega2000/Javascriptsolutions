
    var app = require ("../add/primeprog.js");
    
    describe("Case for Edge ", function() {
      it("should return invalid input for empty input", function() {
        expect(app.getPrimes()).toEqual('invalid input');

      });

      it("should return `invalid input` for -5", function() {
        expect(app.getPrimes(-5)).toEqual('invalid input');
      });

      it("should return `invalid input` for 0 input", function() {
        expect(app.getPrimes(0)).toEqual('invalid input');
      });

      it("should return `invalid input` for string input", function() {
        expect(app.getPrimes('Andela')).toEqual('invalid input');
      });

    });

    describe("Case for a positive numbers", function() {

      it("should return `[ 1, 2, 3, 5 ]` for 6", function() {
        expect(app.getPrimes(6)).toEqual([ 1, 2, 3, 5 ]);
      });

      it("should return `[1, 2, 3, 5, 7]` for 10", function() {
        expect(app.getPrimes(10)).toEqual([1, 2, 3, 5, 7]);
      });

      it("should return `[ 1, 2, 3, 5 ]` for 5", function() {
        expect(app.getPrimes(5)).toEqual([ 1, 2, 3, 5 ]);
      });

      it("should return [ 1, 2 ] for 2", function() {
        expect(app.getPrimes(2)).toEqual([ 1, 2 ]);
      });

      it("should return [ 1, 2, 3, 5, 7, 11 ] for 12", function() {
        expect(app.getPrimes(12)).toEqual([ 1, 2, 3, 5, 7, 11 ]);
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        expect(app.getPrimes(30)).toEqual([ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
      });

    });

    