const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // allow frontend requests

app.get("/user", (req, res) => {
    res.json({ message: "Hello from Backend!" });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
