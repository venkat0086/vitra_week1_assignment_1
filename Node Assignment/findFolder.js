const fs = require("fs");

try {
  const files = fs.readdirSync("../Node Assignment");
  console.log(files);
} catch (e) {
  console.log(e);
}
