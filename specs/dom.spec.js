//FIX to the error : "expect is not defined"
var expect = chai.expect;
describe('DOM creation tests', function () {

    it('JQuery should create the element using chain notation', function () {
        var $newElement = $("<div></div>").addClass("crm-back-top")
            .html($("<a href='#top'></a>"))
            .html($("<div></div>").addClass("icon"));
        expect($newElement.find('.icon').length).to.be.equals(1);
    });

});


