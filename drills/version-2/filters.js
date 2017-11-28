function getSubmissionsByStudent(submissions, studentId) {
  let result = [];
  for (var i = 0; i < submissions.length; i++) {
    if (submissions[i].studentId === studentId) {
      result.push(submissions[i]);
    }
  }
  return result;
}

function getPassedSubmissions(submissions) {
  let result = [];
  for (var i = 0; i < submissions.length; i++) {
    if (submissions[i].didPass === true) {
      result.push(submissions[i]);
    }
  }
  return result;
}

function getFailedSubmissions(submissions) {
  let result = [];
  for (var i = 0; i < submissions.length; i++) {
    if (submissions[i].didPass === false) {
      result.push(submissions[i]);
    }
  }
  return result;
}

module.exports = {
  getSubmissionsByStudent,
  getPassedSubmissions,
  getFailedSubmissions
};
