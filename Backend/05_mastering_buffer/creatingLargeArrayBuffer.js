const data = new ArrayBuffer(1.99 * 1024 * 1024 * 1024);

const view = new DataView(data);

console.log(view.byteLength)

setInterval(() => {
    for(let i = 0; i < view.byteLength; i++){
    view.setInt8(i,42);}
},100)

// console.log(view)