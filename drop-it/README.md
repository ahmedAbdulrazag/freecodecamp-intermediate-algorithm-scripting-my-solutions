# Drop It 

## Instructions 

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

## Sample Outputs

`dropElements([1, 2, 3, 4], n => n > 5)` should return `[]`.

`dropElements([1, 2, 3, 7, 4], n => n > 3) `should return `[7, 4]`.