## Template Literals | String methods & Properties
Template literals and string methods are how you handle text in modern JavaScript. They make combining data and manipulating strings much cleaner than the "old way."

## 1. Template Literals (Backticks)
Introduced in ES6, these use backticks (`) instead of quotes. They provide two game-changing features:

- **String Interpolation**: Embed variables or expressions directly using `${}.` No more messy `+` signs.

```js
const name = "Alice";
console.log(`Hello, ${name}!`); // "Hello, Alice!"
```

- **Multi-line Strings**: You can simply hit "Enter" to start a new line without using `/n`.

```js
const list = `
    - Item 1
    - Item 2
`;
```

## 2. String Properties
Strings have only one major property you'll use constantly:

- `.length`:Returns the number of characters in the string (including spaces).

```js
"Hello".length; // 5
```

## 3. Essential String Methods
Methods are "functions" built into strings. **Important**: Strings are immutable, so these methods return a **new** string rather than changing the original one.

**Changing Casing**
- `.toUpperCase()`/`.toLowerCase()`:Changes the entire string's case.

```js
"coding".toUpperCase(); // "CODING"
```

**Searching & Checking**
- `.includes(substring)`:Returns `true` if the text exists inside the string.

```js
"JavaScript".includes("Script"); // true
```

- `.indexOf(char)`: Returns the position (index) of a character. Remember,JS starts counting at 0.

```js
"Hello".indexOf("e"); // 1
```

**Trimming & Extracting**
- `.trim()`: Removes whitespace from both ends (great for cleaning user input from `prompt()`).
- `.slice(start, end)`: Extracts a part of the string.

```js
"Strawberry".slice(0, 5); // "Straw"
```

**Replacing & Splitting**
- `.replace(old, new)`:Replaces the first occurrence of a value.

- `.split(separator)`:Turns a string into a **Array**.

```js
"red,blue,green".split(","); // ["red", "blue", "green"]
```

## Pro Tip: Chaining
You can chain these together in one line:

```js
let email = " USER@Gmail.com ";
let cleanEmail = email.trim().toLowerCase(); // "user@gmail.com"
```