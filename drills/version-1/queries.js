function getSheetsLength(arr) {
  return arr.length;
}

function assessmentsArrayToObject(arr) {
  if (arr.length === 0) {
    return {};
  } else {
    return {
      assessmentId: arr[0],
      standardId: arr[1],
      version: arr[2],
      description: arr[3],
      assessmentLink: arr[4],
      rubricLink: arr[5]
    };
  }
}

module.exports = {
  getSheetsLength,
  assessmentsArrayToObject
};
