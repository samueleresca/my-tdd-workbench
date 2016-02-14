//FIX to the error : "expect is not defined"
var expect = chai.expect;

//describe String tests
describe('Global tests', function () {
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

});

//describe String tests
describe('String tests', function () {
    var simple_url;
    //Before the execution, initialize the object
    before(function () {
        simple_url = "http://www.localhost.it/system/selfservice.controller?" +
        "CONFIGURATION=1375&PARTITION_ID=1&CMD=VIEW_ARTICLE&" +
        "LANGUAGE=it&COUNTRY=it&USERTYPE=1&ARTICLE_ID=3621";

    });

    it('URL should be contains the string', function () {
        expect(simple_url.indexOf("ARTICLE_ID")).to.be.ok;
    });
});

describe('DOM creation tests', function () {

    it('JQuery should create the element using chain notation', function () {
        var $newElement = $("<div></div>").addClass("crm-back-top")
            .html($("<a href='#top'></a>"))
            .html($("<div></div>").addClass("icon"));
        expect($newElement.find('.icon').length).to.be.equals(1);
    })

})