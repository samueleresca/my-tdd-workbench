//FIX to the error : "expect is not defined"
var expect = chai.expect;

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

