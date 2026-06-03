## Variables in JavaScript
In JavaScript, variables are containers for storing data values. While they all serve the same purpose, the way you declare them determines their scope and how they can be **reassigned**.

There are three keywords used to declare variables:

## 1.`const` (The Modern Standard)
Use `const` for variables that **should not change**. It is the most common choice in modern coding to prevent accidental bugs.

- **Block Scoped**:It only exists within the `{}` where it was defined.

- **Immutable Binding**:You cannot reassign the variable to a new value.

- **Note**:While you can't reassign the variable itself, you can change the contents of an object or array declared with `const`.

## 2.`let` (For Changing Values)
Use `let` when you know a value will need to be **updated** later (like a counter in a loop).

- **Block Scoped**:Like `const`, it stays within its curly braces.

- **Reassignable**:Like const, it stays within its curly braces.

## 3.`var` (The Legacy Way)
This was the only way to declare variables before 2015 (ES6). In modern development, it is generally **avoided**.

- **Function Scoped**:It ignores block boundaries (like `if` statements or `for` loops), which often causes bugs.

- **Hoisting**:You can technically use a `var` before it's declared in the code (it will return `undefined`), which is confusing for beginners.

## Summary Comparison
|**Feature**|`const`|`let`|`var`|
|-----------|-------|-----|-----|
|**Reassignable**|No|Yes|Yes|
|**Redeclarable**|No|No|Yes|
|**Scope**|Block `{}`|Block `{}`|Function|
|**Usage**|Default choice|Use if value changes|Avoid|

## Variable Naming Rules

1. Names can contain letters, digits, underscores (`_`), and dollar signs (`$`).

2. They must begin with a letter, `$`, or `_`.

3. Names are **case-sensitive** (`myVar` and `myvar` are different).

4. You cannot use reserved keywords (like `if`,`class`,or`return`).
