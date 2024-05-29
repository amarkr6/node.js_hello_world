const fs = require("fs");
const os = require("os");

// Sync... Blocking Req.
fs.writeFileSync("./test.txt", "Hello world!");

// Async.. Non Blocking Req.
fs.writeFile("./test.txt", "Hello Node.js!", (err) => { });

const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result);

fs.readFile("./contact.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log(result);
    }
});

fs.appendFileSync("./test.txt", `${Date.now()} hey There\n`);

fs.cpSync("./test.txt", "./copy.txt");

fs.unlinkSync("./copy.txt");
console.log(fs.statSync("./test.txt").isFile());
fs.mkdirSync("my-docs");

console.log(os.cpus().length);
