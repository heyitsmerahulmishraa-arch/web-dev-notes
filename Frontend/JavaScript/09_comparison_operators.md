## Comparison Operators
Comparison operators are used to test for relationships between values, returning a boolean (`true` or `false`). In JavaScript, the most important distinction is between **"shallow"** and **"strict"** equality.

## 1.Equality Operators
- `==`**(Abstract/Loose Equality)**:Compares values after performing type conversion. It asks: "Are these the same value if I convert them to the same type?"
    - `5 == "5"` is `true`.

- `===`**(Strict Equality)**:Compares both **value and data type**. No conversion happens. It asks: "Are these exactly the same?"
    - `5 === "5"` is `false`.
    - **Pro Tip**:Always use `===` to avoid hidden bugs.

## 2.Inequality Operators
- `!=`**(Loose Inequality)**:Returns `true` if the values are different, even after type conversion.

- `!==`**(Strict Inequality)**:Returns `true` if the values or types are different.

## 3.Relational Operators
These compare the magnitude of values (standard math rules apply):

- `>`:Greater than
- `<`:Less than
- `>=`:Greater than or equal to
- `<=`:Less than or equal to

## Interesting Edge Cases
JavaScript's comparison logic can sometimes feel "weird" due to how it handles strings and objects:

1. **String Comparison**:Strings are compared character-by-character based on Unicode values (alphabetical order).
```js
"apple" < "banana"; // true
"Z" < "a"; // true (Uppercase comes before lowercase)
```

2. **The** `null` **vs** `0` **Trap**:
```js
null > 0; // false
null == 0; // false
null >= 0; // true (JS converts null to 0 for relational checks, but not for equality!)
```

3. **Objects & Arrays**:You cannot compare objects or arrays using `==` or `===` based on their content. They are compared by **memory reference**.
```js
[1,2] == [1,2]; // false (They look the same, but are different objects in memory)
```