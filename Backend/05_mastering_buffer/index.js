// console.log(ArrayBuffer)
// console.dir(new ArrayBuffer())


// Reading Buffers from files Example Code
// const fileInput = document.getElementById("fileInput");

// fileInput.addEventListener("change", (event) => {
//     const file = event.target.files[0];

//     const reader = new FileReader();
//     reader.addEventListener("load", function (e) {
//         const arrayBuffer = e.target.result;
//         console.log(arrayBuffer);
//     });

//     reader.readAsArrayBuffer(file);
// });

// Unsigned store positive values like => 0,1,2,3,4
// Signed store negative values like => 1,-2,-3,-4
// We use 2's complement to convert unsigned to signed (positive to negative)

// 8 bytes buffer created in memory
const data = new ArrayBuffer(8);

// to write or read in ArrayBuffer
const view = new DataView(data);

view.setInt8(0,0x8d);
view.setInt8(1,0x4a);
view.setInt8(2,0o0101110);
view.setInt8(3,83);

console.log(view)
console.log(view.getInt8(3))

// view.getInt8() <= this read value as a signed value
// view.getUint8() <= this read value as a unsigned value