# Test Applications with Unit Tests

## Scenario

You are a Lead Instructor at Galvanize, and your students submit their assessments using a Google Form which stores all student submissions in Google Sheets. When instructors grade student assessments, they have to look through a spreadsheet with thousands of rows and use the filter feature to find what they want to grade. The process is slow and frustrating, and you are going to build an app that will streamline this process.

## Instructions

In `filters.js` you'll find 3 functions which already have implementations. Your objective is to write passing tests using `mocha` and an assertion library.

## Getting Started

1. Fork and clone this repository. Once you've got the code locally, run the command `npm install`
1. Install mocha and (optionally) an assertion library
1. Configure `npm test` to run a test suite
1. Write your test suite following the instructions below:

## Tests

1. Write a unit test for a function called `getSubmissionsByStudent`

  - The function should return an empty array if no student matches the id number passed in
  - Below is sample input and output if the user is looking for submissions for a student with the id number 3:

_Input:_

```javascript
[{
 studentId: 1
}, {
 studentId: 1
}, {
 studentId: 2
}];

3
```

_Output:_

```javascript
[]
```

2. Write another unit test for the `getSubmissionsByStudent` function

  - The function should accept an array of student submissions and a student id number and return all submissions that match the id number.
  - Below is sample input and output if the user is looking for student submissions for the student with the id number 1

_Input:_

```javascript
[{
studentId: 1
}, {
studentId: 1
}, {
studentId: 2
}]

1
```

_Output:_

```javascript
[{
studentId: 1
}, {
studentId: 1
}]
```

3. Write a unit test for a function called `getPassedSubmissions` that returns an array of passed submissions

_Input:_

```javascript
[{
    studentId: 1,
    didPass: true
}, {
    studentId: 1,
    didPass: false
}, {
    studentId: 2,
    didPass: true
}]
```

_Output:_

```javascript
[{
    studentId: 1,
    didPass: true
},{
    studentId: 2,
    didPass: true
}]
```

4. Write a unit test for a function called `getFailedSubmissions` that returns an array of failed submissions based on the student:

_Input:_

```javascript
[{
    studentId: 1,
    didPass: true
}, {
    studentId: 1,
    didPass: false
}, {
    studentId: 2,
    didPass: true
}]
```

_Output:_

```javascript
[{
    studentId: 1,
    didPass: false
}]
```
