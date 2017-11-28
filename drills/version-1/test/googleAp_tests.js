const assert = require("assert")
const code = require("../queries")

describe("query", function () {
  describe("#getSheetsLength", function () {
    it("returns the length of the sheets array", function() {
      assert.equal(code.getSheetsLength([
        'ATS-1-a',
        'ATS-1',
        'a',
        'Manage and navigate a file system',
        'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1',
        'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1/rubric.md'
      ]), 6)
    });
  });
  describe("#assessmentsArrayToObject", function () {
    it("returns a blank object if passed a blank array", function () {
      assert.deepEqual(code.assessmentsArrayToObject([]),{})
    });
    it("accepts an array of column headers from a spreadsheet and return an object that labels the headers", function () {
      assert.deepEqual(code.assessmentsArrayToObject([
        'ATS-1-a',
        'ATS-1',
        'a',
        'Manage and navigate a file system',
        'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1',
        'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1/rubric.md'
      ]), {
        assessmentId: 'ATS-1-a',
        standardId: 'ATS-1',
        version: 'a',
        description: 'Manage and navigate a file system',
        assessmentLink: 'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1',
        rubricLink: 'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1/rubric.md'
      });
    });
  });
});
