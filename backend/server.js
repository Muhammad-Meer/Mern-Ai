const app = require("./src/app");
const dotenv = require('dotenv').config()
const connectDb = require('./src/config/connectDb')
const dns = require("dns");


dns.setServers(["8.8.8.8", "1.1.1.1"]);


const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectDb()
});