const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routers
const router = require("./routes/imageRouter.js");
app.use("/api/images", router);

//static Images Folder

app.use("/Images", express.static("./Images"));

//port

const PORT = process.env.PORT || 8080;

//server

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
