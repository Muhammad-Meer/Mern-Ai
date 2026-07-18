const app = require("./src/app");
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});