# MongoDB $inc Operator Error with String Field
This repository demonstrates an uncommon error that occurs when using the `$inc` operator in MongoDB with a string field.  The `$inc` operator is designed for numerical fields. Attempting to use it with a string will result in an error.

The `bug.js` file shows the incorrect implementation and the error it produces.  The `bugSolution.js` file presents the corrected implementation.

## Bug
The bug lies in the incorrect usage of the `$inc` operator on a string field ('myString') within a MongoDB update operation.  This will throw an error because `$inc` is only designed to increment numeric values.

## Solution
The solution involves ensuring the field to be incremented ('myString') is of a numeric type (e.g., NumberInt, NumberLong).  If necessary, convert the field to a numeric type before using the `$inc` operator.