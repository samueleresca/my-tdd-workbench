//FIX to the error : "expect is not defined"
var expect = chai.expect;
//describe String tests
describe('Sample tests', function () {
    //Before the execution, initialize the object
    before(function () { });

    it('console should be defined', function () {
        expect(console).to.be.ok;
    });

    it('document should be defined', function () {
        expect(document).to.be.ok;
    });

    it('JQuery should be defined', function () {
        expect($).to.be.ok;
    });

    it('(html2js) DOM should be defined', function () {
        expect(window.__html__).to.be.ok;
    })

    it('(html2js) Demo DOM should be defined', function () {
        document.body.innerHTML = window.__html__['specs/mockHTML/demo.html'];
        expect($(document).find('.test-html2js').length).to.be.equals(1);
    });

});
