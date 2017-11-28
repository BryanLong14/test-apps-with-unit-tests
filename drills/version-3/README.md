# Test Applications with Unit Tests

## Scenario

You are a Lead Instructor at Galvanize, and your students submit their assessments using a Google Form which stores all student submissions in Google Sheets. When instructors grade student assessments, they have to look through a spreadsheet with thousands of rows and use the filter feature to find what they want to grade. The process is slow and frustrating, and you are going to build an app that will streamline this process.

## Instructions

In `counters.js` you'll find 3 functions which already have implementations. Your objective is to write passing tests using `mocha` and an assertion library.

## Getting Started

1. Fork and clone this repository. Once you've got the code locally, run the command `npm install`
1. Install mocha and (optionally) an assertion library
1. Configure `npm test` to run a test suite
1. Write your test suite following the instructions below:

## Tests

1. Write a unit test for a function called `countPassedSubmissions`
  - The function should accept an array of student submissions and return the number of passed submissions based on the standard.

_Input:_

```js
[{
  didPass: true
}, {
  didPass: true
}, {
  didPass: false
}]
```

_Output:_ `2`

2. Write a unit test for a function called `didMasterStandard`
  - The function should accept an array of student submissions and a 'standard'  object a boolean for whether or not the student has mastered a standard

_Input:_
```js
[{
  standardId: "1",
  didPass: true
},{
  standardId: "1",
  didPass: true
}]

{
  assessmentsToPass: 2,
  standardId: "1"
}
```

_Output:_
`true`

3. Write a unit test for a function called `remainingAssessments`
  - The function should accept an array of assessments and an array of submissions and return an array of assessments the student still needs to complete.

_Input:_

```js
[{
  standardId: "a",
}, {
  standardId: "b",
}, {
  standardId: "c",
}]

[{
  standardId: "a",
  didPass: true
}, {
  standardId: "b",
  didPass: true
}, {
  standardId: "c",
  didPass: false
}]
```

_Output:_
```js
[{
  standardId: "c"
}]
```
