# Unexpected Type Coercion with + Operator in JavaScript

This repository demonstrates a common JavaScript bug caused by implicit type coercion when using the `+` operator with mixed number and string types.  The bug arises from JavaScript's loose typing system, where the `+` operator performs string concatenation if one of its operands is a string, leading to unexpected results.

## Bug Description

The primary issue is the implicit conversion of numbers to strings when the `+` operator encounters a string operand.  This behavior is different from many statically-typed languages where such an operation would result in a type error.

## How to Reproduce

1. Clone this repository.
2. Navigate to the `bug` directory.
3. Run `node bug.js`.  You will observe that the output is "11" instead of the expected numerical sum, 2.

## Solution

The solution involves explicitly converting both operands to numbers before performing the addition using `parseInt()` or `Number()`.  This ensures that the addition is performed numerically, preventing the unexpected string concatenation.

## Lessons Learned

This example highlights the importance of careful type handling in JavaScript.  Explicitly converting operands to the desired types prevents these subtle bugs. Always validate user input to avoid unexpected behaviors.