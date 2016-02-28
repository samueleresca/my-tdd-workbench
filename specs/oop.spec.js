//FIX to the error : "expect is not defined"
var expect = chai.expect;

describe('OOP tests', function () {
    //Before the execution, initialize the object
    beforeEach(function () {
        this.myNamespace = this.myNamespace || {};
    });

    it('test should be define a namespace', function () {
        expect(this.myNamespace).to.be.ok;
    });

    it('test should be not override exiting methods', function () {
        this.myNamespace.foo = "test";
        this.myNamespace = this.myNamespace || {};
        expect(this.myNamespace.foo).to.be.equals("test");
    });

});
