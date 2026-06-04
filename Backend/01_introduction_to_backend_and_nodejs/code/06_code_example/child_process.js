// const {exec} = require('child_process');

// exec("notepad")

// using spawn
const {spawn} = require('child_process');

// const process = spawn("notepad");

// process.on("error", (err) => {
//     console.error("An error occurred:", err);
// });

spawn("notepad",[], {
    detached: true,
    stdio: "ignore",
}).unref();

// [] is for arguments, we can pass arguments to the notepad if needed. arguments like file name to open in notepad. 
// detached: true allows the child process to run independently of the parent process. 
// stdio: "ignore" means that the child process will not inherit the standard input, output, and error streams of the parent process. 
// unref() allows the parent process to exit independently of the child process.