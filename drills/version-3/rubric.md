All required to pass

- [ ] All tests pass
- [ ] Has an `npm test` command that runs the test suite
- [ ] Has a describe block named `#countPassedSubmissions`
    - It has an `it` block that talks about counting the number of passed standards
    - It asserts that passing in an array of submissions returns `2`
- [ ] Has a describe block named `#didMasterStandard`
    - It has an `it` block that talks about indicating whether or not a standard was mastered
    - It asserts that passing in a submissions array and a standard object results in `true`
- [ ] Has a describe block named `#remainingAssessments`
    - It has an `it` block that talks about returning the remaining assessments
    - It asserts that passing in an array of assessments and an array of submissions will return return an array of assessments
