# Test Applications with Unit Tests

## Scenario

You are a Lead Instructor at Galvanize, and your students submit their assessments using a Google Form which stores all student submissions in Google Sheets. When instructors grade student assessments, they have to look through a spreadsheet with thousands of rows and use the filter feature to find what they want to grade. The process is slow and frustrating, and you are going to build an app that will streamline this process.

## Instructions

In `queries.js` you'll find 3 functions which already have implementations. Your objective is to write passing tests using `mocha` and an assertion library.

## Getting Started

1. Fork and clone this repository. Once you've got the code locally, run the command `npm install`
1. Install mocha and (optionally) an assertion library
1. Configure `npm test` to run a test suite
1. Write your test suite following the instructions below:

## Tests

1. Write a unit test for a function called `getSheetsLength`
  - The function should return the length of the sheets array.

_Input:_
```js
[
  'ATS-1-a',
  'ATS-1',
  'a',
  'Manage and navigate a file system',
  'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1',
  'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1/rubric.md'
]
```

_Output:_
`6`

2. The `assessmentsArrayToObject` function should return a blank object if passed a blank array

_Input:_
```js
[]
```

_Output:_
```js
{}
```

3. Write a unit test for a function called `assessmentsArrayToObject`
  - The function should accept an array of column headers from a spreadsheet and return and object that labels the headers.
  - The labels for the headers are `assessmentId`, `standardId`, `version`, `description`,`assessmentLink`, `rubricLink`

_Input:_
```js
[
  'ATS-1-a',
  'ATS-1',
  'a',
  'Manage and navigate a file system',
  'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1',
  'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1/rubric.md'
]
```

_Output:_
```js
{
  assessmentId: 'ATS-1-a',
  standardId: 'ATS-1',
  version: 'a',
  description: 'Manage and navigate a file system',
  assessmentLink: 'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1',
  rubricLink: 'https://github.com/gSchool/manage-file-systems/tree/master/drills/version-1/rubric.md'
}
```
