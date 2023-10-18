const express = require("express");
const cors = require('cors')

const app = express();
const PORT = 5000; // or any other port you prefer

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

// middleware === >>>
app.use("/products", cors(), require("./routes/productRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
