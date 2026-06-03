## Math Object in JS
The ``Math` object in JavaScript is **a built-in object that allows you to perform mathematical tasks on numbers**. Unlike other objects, `Math` is not a constructor—you don’t create a "new" Math object; you just use it directly

## 1. Most Useful Methods

**Rounding Numbers**

- `Math.round(x)`:Rounds to the nearest integer.

- `Math.floor(x)`:Rounds **down** to the nearest integer.

- `Math.ceil(x)`:Rounds **up** to the nearest integer.

- `Math.trunc(x)`:Removes the decimal part (returns the integer).

**Finding Values**

- `Math.pow(base, exponent)`:Returns the base to the power of the exponent (e.g., `Math.pow(2, 3)` is 8).

- `Math.sqrt(x)`:Returns the square root of a number.

- `Math.min(a,b,c...)` and `Math.max(...)`:Find the lowest or highest value in a list.

## 2.Generating Random Numbers

`Math.random()` is one of the most used methods. It returns a decimal between `0`(inclusive) and `1`(exclusive).

To get a random **integer** between a range, you combine it with `Math.floor()`:

```js
// Get a random integer between 0 and 10
let randomNum = Math.floor(Math.random() * 11);
```

## 3.Math Constants (Properties)
The `Math` object also provides several mathematical constants you can access:

- `Math.PI`:Returns the value of PI (approx. 3.14159).
- `Math.E`:Returns Euler's number.
- `Math.SQRT2`:Returns the square root of 2.

## 4. Comparison Table: Rounding

|Method|Input:`4.7`|Input:`4.2`|Input:`-4.2`|
|------|-----------|-----------|------------|
|`round`|5|4|-4|
|`floor`|4|4|-5|
|`ceil`|5|5|-4|
|`trunc`|4|4|-4|

## Practical Example: The Power Operator
While `Math.pow(2, 3)` works, modern JavaScript (ES7+) often uses the **exponentiation operator** instead:

```js
let power = 2 ** 3; // Result: 8
```