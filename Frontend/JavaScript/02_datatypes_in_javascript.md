## Data Types in JavaScript
JavaScript has **8 basic data types**, which are divided into two main categories: **Primitive and Non-Primitive (Reference)**.

Primitive values are **immutable** and stored directly in the "stack" memory. JavaScript has **7 primitive types**:

- **Number**:Represents both integers and floating-point numbers (e.g., `42`, `3.14`). It also includes special values like `NaN` (Not-a-Number) and `Infinity`.

- **String**:A sequence of characters enclosed in single, double, or backticks (e.g., `"Hello"`).

- **Boolean**:Represents a logical entity with two possible values: `true` or `false`.

- **Undefined**:Automatically assigned to variables that have been declared but not yet initialized.

- **Null**:An intentional absence of any value. Note that `typeof null` returns `"object"`, which is a well-known bug in JavaScript.

- **BigInt**:Used for integers larger than the standard Number limit ($2^{53}$ - 1). They are created by adding an `n` to the end of an integer.

- **Symbol**:Introduced in ES6, these provide **unique and immutable identifiers**, often used as property keys in objects.

## 2. Non-Primitive (Reference) Data Types
Non-primitive types are **mutable** and stored in "heap" memory, with only a reference (pointer) stored in the stack.

- **Object**:The foundation of more complex data structures. Objects store collections of data as **key-value pairs**.

- **Array**:A special type of object used to store ordered lists of values.

- **Function**:Also technically objects in JavaScript, functions are blocks of code designed to perform specific tasks.

## Comparison Table: Primitive vs Reference

|Feature|Primitive Types|Reference (Object) Types|
|-------|---------------|------------------------|
|**Storage**|Stored directly in **Stack** memory|Stored in **Heap**; reference in Stack|
|**Mutability**|**Immutable** (cannot be changed)|**Mutable** (can be modified)|
|**Assignment**|Copied by **Value**|Copied by **Reference**|
|**Comparison**|Compared by **Value**|Compared by **Memory Reference**|

## Important Note on Typing
JavaScript is dynamically typed, meaning you don't have to declare a variable's type. A single variable can hold a `String` at one point and a `Number` later. You can check a value's type using the `typeof` operator.