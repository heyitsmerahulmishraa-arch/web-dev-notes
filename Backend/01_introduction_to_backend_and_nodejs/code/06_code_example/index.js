// const fs = require("fs");

// fs.writeFileSync("text.txt", "Hello World");

// const data = fs.readFileSync("text.txt", "utf-8");

// console.log(data);

// Promise version of fs module
// const fs = require("fs/promises");

// async function main() {
//     await fs.writeFile("text2.txt", "promise version of fs module");

//     const data = await fs.readFile("text2.txt", "utf-8");

//     await fs.appendFile("text2.txt", "\n This is appended text.");

//     const data2 = await fs.readFile("text2.txt", "utf-8");

//     console.log(data);
//     console.log(data2);

//     await fs.unlink("text2.txt");
//     await fs.unlink("text.txt");

// }

// main();


// just for testing purpose
// const fs = require("fs/promises");

// async function main() {
//     try{
//         let counter = 0;
//         await fs.writeFile("text.txt", "Hello World");

//         let timer = setInterval(async () => {
//             counter++;
//             if(counter === 1){
//                 console.log("File Read in 5 seconds");
//             }
//             console.log("Counter:", counter);
//             if(counter === 5){
//                 const data = await fs.readFile("text.txt", "utf-8");
//                 console.log(data);
//                 clearInterval(timer);
//             }
//         },1000);
//     }catch(err){
//         console.error("An error occurred:", err);
//     }
// }

// main();