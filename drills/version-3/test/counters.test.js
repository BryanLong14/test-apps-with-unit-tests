const assert = require("assert")
const code = require("../counters")


describe("GoogleSheetsAp", function () {
  describe("#countPassedSubmissions", function () {
    it("accepts an array of student submissions and returns the number of passed submissions based on the standard", function () {
      assert.equal(code.countPassedSubmissions([{
        didPass: true
      }, {
        didPass: true
      }, {
        didPass: false
      }]), 2)
    });
  });
  describe("#didMasterStandard", function () {
    it("accepts an array of student submissions and a 'standard' and returns a boolean boolean for whether or not the student has mastered a standard", function () {
      assert.equal(code.didMasterStandard([{
        standardId: "1",
        didPass: true
      },{
        standardId: "1",
        didPass: true
      }],
      {
        assessmentsToPass: 2,
        standardId: "1"
      }), true)
    });
  });
  describe("#remainingAssessments", function () {
    it("accepts an array of assessments and an array of submissions and returns an array of assessments the student still needs to complete", function () {
      assert.deepEqual(code.remainingAssessments([{
        standardId: "a",
      }, {
        standardId: "b",
      }, {
        standardId: "c",
      }],
      [{
        standardId: "a",
        didPass: true
      }, {
        standardId: "b",
        didPass: true
      }, {
        standardId: "c",
        didPass: false
      }]), [{
        standardId: "c"
      }]);
    });
  });
});
