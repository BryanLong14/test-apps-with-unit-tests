const assert = require("assert");
const code = require("../filters");

const submissions = [{
 studentId: 1
}, {
 studentId: 1
}, {
 studentId: 2
}];

const allSumbission = [{
    studentId: 1,
    didPass: true
}, {
    studentId: 1,
    didPass: false
}, {
    studentId: 2,
    didPass: true
}];

describe("GoogleSpreadsheet", function () {
  describe("#getSubmissionsByStudent", function () {
    it("The function should return an empty array if no student matches the id number passed in", function () {
     assert.deepEqual(code.getSubmissionsByStudent(submissions, 3), [])
   });
   it("should accept an array of student submissions and a student id number and return all submissions that match the id number", function () {
     assert.deepEqual(code.getSubmissionsByStudent(submissions, 1), [{
     studentId: 1
     }, {
     studentId: 1
   }]);
  });
 });
 describe("#getPassedSubmissions", function () {
    it("returns an array of passed submissions", function () {
      assert.deepEqual(code.getPassedSubmissions(allSumbission), [{
          studentId: 1,
          didPass: true
      },{
          studentId: 2,
          didPass: true
      }]);
    });
 });
 describe("#getFailedSubmissions", function () {
   it("returns an array of failed submissions based on the student", function () {
     assert.deepEqual(code.getFailedSubmissions(allSumbission), [{
         studentId: 1,
         didPass: false
     }]);
   });
 });
});
