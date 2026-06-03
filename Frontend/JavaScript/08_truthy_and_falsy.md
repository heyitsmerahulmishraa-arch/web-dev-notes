## Truthy and Falsy Values
In JavaScript, **Truthy** and **Falsy** values describe how non-boolean data (like strings or numbers) is treated when it's forced into a boolean context (like an `if` statement).

## 1. Falsy Values
There are only **8 values** in JavaScript that are considered "falsy." When checked in a condition, they all behave like `false`:

1. `false`:The boolean itself.
2. `0`:The number zero.
3. `-0`:Negative zero.
4. `0n`:BigInt zero.
5. `""`:An empty string (no characters, no spaces).
6. `null`:Explicitly "nothing."
7. `undefined`:A variable that hasn't been set.
8. `NaN`:"Not-a-Number."

## 2.Truthy Values
**Everything else** is truthy. If it's not on the list above, it evaluates to `true`. This includes some "surprising" ones:

- `"0"`:A string containing the character zero.
- `"false"`:A string containing the word false.
- `[]`:An empty array.
- `{}`:An empty object.
- `function() {}`:An empty function.

## 3.Practical Usage
We use this concept to write shorter code. Instead of checking if a string is empty or if a variable exists, we just check the variable itself:

```js
let username = prompt("Enter your name:");

// If the user clicks "Cancel" (null) or leaves it empty (""), it's FALSY.
if(username){
    console.log(`Hello, ${username}!`);
}else{
    console.log("No name entered.");
}
```

## 4. How to check for yourself?
You can use the Logical NOT (`!`) operator or the Boolean constructor to see how JS views a value:

```js
Boolean("");       // false
Boolean("Hello");  // true

!!"";   // false (Double negation: not-not-empty-string)
```