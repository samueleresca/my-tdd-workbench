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

    it('(html2js) DOM should be defined', function () {
        expect(window.__html__).to.be.ok;
    })

    it('(html2js) Demo DOM should be defined', function () {
        document.body.innerHTML = window.__html__['test/mockHTML/demo.html'];
        expect($(document).find('.test-html2js').length).to.be.equals(1);
    });

});

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

    it('URL should be contains N strings', function () {
        //RETURNS NULL IF DOESN'T MATCH
        expect(simple_url.match(/(ARTICLE_ID|VIEW_ARTICLE)/)).to.be.ok;
    });
});


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

describe('DOM creation tests', function () {

    it('JQuery should create the element using chain notation', function () {
        var $newElement = $("<div></div>").addClass("crm-back-top")
            .html($("<a href='#top'></a>"))
            .html($("<div></div>").addClass("icon"));
        expect($newElement.find('.icon').length).to.be.equals(1);
    });

});

