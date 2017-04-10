
    //var app = require("../app/primeproj.js");
    
    describe("Case for negative input", function() {
      it("should return invalid input for empty input", function() {
        expect(app.aritGeo()).toEqual('invalid input');

      });

      it("should return `invalid input` for -5", function() {
        expect(app.aritGeo(-5)).toEqual('invalid input');
      });

      it("should return `invalid input` for 0 input", function() {
        expect(app.aritGeo(0)).toEqual('invalid input');
      });

      it("should return `invalid input` for string input", function() {
        expect(app.aritGeo('Andela')).toEqual('invalid input');
      });

    });

    describe("Case for a positive numbers", function() {

      it("should return `[ 1, 2, 3, 5 ]` for 6", function() {
        expect(app.aritGeo(6)).toEqual([ 1, 2, 3, 5 ]);
      });

      it("should return `[1, 2, 3, 5, 7]` for ", function() {
        expect(app.aritGeo(10)).toEqual([1, 2, 3, 5, 7]);
      });

      it("should return `[ 1, 2, 3, 5 ]` for 5", function() {
        expect(app.aritGeo(5)).toEqual([ 1, 2, 3, 5 ]);
      });

      it("should return [ 1, 2 ] for 2", function() {
        expect(app.aritGeo(2)).toEqual([ 1, 2 ]);
      });

      it("should return [ 1, 2, 3, 5, 7, 11 ] for 12", function() {
        expect(app.aritGeo(12)).toEqual([ 1, 2, 3, 5, 7, 11 ]);
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        expect(app.aritGeo(30)).toEqual([ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
      });

    });

    