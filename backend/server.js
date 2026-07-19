const app = require("./src/app");
const dotenv = require('dotenv').config()
const connectDb = require('./src/config/connectDb')


const dns = require("dns");

console.log("Before:", dns.getServers());

dns.setServers(["8.8.8.8", "1.1.1.1"]);

console.log("After:", dns.getServers());

dns.resolve4("google.com", (err, addresses) => {
  console.log(err, addresses);
});


connectDb()

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});