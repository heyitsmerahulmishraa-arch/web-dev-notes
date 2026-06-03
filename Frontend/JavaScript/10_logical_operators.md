## Logical Operators in JS | AND, OR, NOT Operators
Logical operators are used to combine multiple conditions or to flip the truthiness of a value. In JavaScript, they don't just return `true` or `false`; they actually return the value of one of the operands.

## 1. `&&` (Logical AND)
The AND operator checks if all conditions are truthy.

- **Behavior**:It starts from left to right. It stops at the **first falsy** value it finds and returns it. If all are truthy, it returns the **last** value.

- Logic Table:
    - `true && true` => `true`
    - `true && false` => `false`

```js
let hour = 12;
let minute = 30;

if(hour === 12 && minute === 30){
    console.log("It is exactly 12:30");
}
```

## 2.`||` (Logical OR)
The OR operator checks if at **least one** condition is truthy.

- **Behavior**:It starts from left to right. It stops at the **first truthy** value it finds and returns it. If all are falsy, it returns the **last** value.

- **Logic Table**:
    - `true || false` => `true`
    - `false || false` => `false`

```js
let isWeekend = true;
let isHoliday = false;

if(isWeekend || isHoliday){
    console.log("The office is closed.");
}
```

## 3.`!` (Logical NOT)
The NOT operator is a "unary" operator (it only takes one operand) that **flips** the boolean state.

- **Behavior**: It converts the value to a boolean and then returns the opposite.

- **Double NOT (`!!`)**:Often used to convert any value into its actual boolean equivalent (e.g., `!!"hello"` becomes `true`).

```js
let userLoggedIn = false;

if(!userLoggedIn){
    console.log("Please log in to continue.");
}
```

## Short-Circuit Evaluation
JavaScript uses "short-circuiting," which means it only evaluates as much as it needs to.

- **AND(`&&`) short-circuits on `false`**: If the first part is false, JS doesn't even look at the second part because the whole thing is already guaranteed to be false.

- **OR(`||`) short-circuits on `true`**:If the first part is true, JS skips the second part because the whole thing is already guaranteed to be true.

**Example of OR for default values**:
```js
let input = "";
let username = input || "Guest"; // Since "" is falsy, it picks "Guest"
console.log(username); // "Guest"
```