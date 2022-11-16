const express = require('express');
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();

app.use(express.json());

// ------- Deployment ---------

__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    })
} else {
    app.get('/', (req, res) => {
        res.status(200).send('API is running okay!');
    })
}

// ------- Deployment ---------

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));