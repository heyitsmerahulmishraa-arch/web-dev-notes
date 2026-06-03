## Dialog Boxes in JS (Alert, Confirm & Prompt)
In JavaScript, **Dialog Boxes** are simple, built-in methods used to interact with the user via a small pop-up window. They belong to the `window` object and are **synchronous**, meaning they pause code execution until the user interacts with them.

## 1.`alert()` - The Notification
Used to show a message to the user. It only has an "OK" button.

- **Purpose**:Giving information or warnings.
- **Returns**:Nothing (`undefined`).

```js
alert("Welcome to the site!");
```

## 2.`confirm()` - The Yes/No Choice
Display a message with "OK" and "Cancel" buttons.

- **Purpose**:Asking for Permission or verification (e.g., "Are you sure you want to delete?").

- **Returns**:`true` if the user clicks OK, and `false` if they click Cancel.

```js
let isBoss = confirm("Are you the boss?");
if(isBoss){
    alert("Hello, Boss!");
}else{
    alert("Hello, Guest!");
}
```

## 3.`prompt()` - The Input Box
Displays a message, a text input field, and OK/Cancel buttons.

- **Purpose**: Getting a specific piece of text or data from the user.

- **Returns**: The string the user typed. If they click Cancel, it returns null.

- **Syntax**: `prompt(message, [default_value])

```js
let age = prompt("How old are you?", 25);
alert(`you are ${age} years old!`);
```

## Key Limitations
While useful for learning, professional developers often replace these with custom HTML "Modals" (like SweetAlert or Bootstrap modals) because:

1. **Appearance**:You cannot change the style or CSS of these boxes; they look different in every browser.

2. **Blocking**:They "freeze" the entire browser tab—nothing else can happen on the page until the box is closed.

3. **Spam Prevention**:If shown too often, browsers will offer the user an option to "Prevent this page from creating additional dialogs," which breaks your site's logic.