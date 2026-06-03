## Watch code running line by line in dev tools
To watch your code run line by line, you **use the Sources tab in your browser's Developer Tools** (Chrome, Edge, or Brave). This process is called **Debugging**.

## 1.Open the Debugger
1. Open your web page in the browser.

2. Press `F12` (or `Cmd + Option + I` on Mac) to open Dev Tools.

3. Click the **Sources** tab at the top.

4. In the left file navigator, click on your JavaScript file to open it.

## 2.Set a "Breakpoint"

A breakpoint tells the browser to pause execution at a specific line.

- Click on the **line number** where you want the code to stop. A blue/red marker will appear.

- Refresh your page (or trigger the action, like clicking a button) to make the code run. The browser will freeze, and that line will be highlighted.

## 3.Use the Navigation Controls
Once the code is paused, look for the execution buttons in the top right of the Sources panel:

- **Step Over (F10)**:Moves to the next line in the current file. It won't jump "into" a function if the line calls one.

- **Step Into (F11)**:If the current line calls a function, this "dives" inside that function so you can see it run line by line.

- **Step Out (Shift+F11)**:Finished looking at a function? This jumps you back out to the main code.

- **Resume (F8)**:Tells the code to stop pausing and run normally until it hits the next breakpoint.

## Watch Your Variables
While the code is paused, you can see what’s happening "under the hood":

- **Hover**:Hover your mouse over any variable in the code to see its current value.

- **Scope Tab**:Look at the "Scope" pane on the right; it lists every variable currently in memory and their values.

- **Watch Expressions**:Click the + in the "Watch" pane to track a specific variable's value as you step through the lines.

**Pro Tip**: You can also type `debugger`; directly into your JavaScript code. When the browser hits that line, it will automatically open Dev Tools and pause right there.