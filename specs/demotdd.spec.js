//FIX to the error : "expect is not defined"
var assert = chai.assert;

/*
* A single block of unit tests
*/
describe('Date tests', function () {
    /*
    * The SETUP function : it sets the environment variables
    */
    before(function () {
        this.date = new Date(2016, 3, 15);
    });
    /*
    * List of assertions 
    */
    it('date should be defined', function () {
        assert(this.date);
    });

    it('year  should be correct', function () {
        assert(this.date.getFullYear() === 2016);
    });

    it('month should be correct', function () {
        assert(this.date.getMonth() === 3);
    });

    it('day should be correct', function () {
        assert(this.date.getDate() === 15);
    });
});
