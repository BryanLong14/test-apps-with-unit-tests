function countPassedSubmissions(submissions) {
  let counter = 0;
  for (var i = 0; i < submissions.length; i++) {
    if (submissions[i].didPass === true) {
      counter++;
    }
  }
  return counter;
}

function didMasterStandard(submissions, standard) {
  if (countPassedSubmissions(submissions) >= standard.assessmentsToPass) {
    return true;
  }
}

function remainingAssessments(assessments, submissions) {
  let remainingAssessments = [];
  for (var i = 0; i < submissions.length; i++) {
    if (submissions[i].didPass === false) {
      remainingAssessments.push({
        standardId: submissions[i].standardId
      });
    }
  }
  return remainingAssessments;
}

module.exports = {
  countPassedSubmissions,
  didMasterStandard,
  remainingAssessments
};
