const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Docker Web Application</title>
            </head>
            <body>
                <h1>Dockerized Web Application</h1>
                <p>Application is running successfully inside Docker!</p>
                <p>Task 1 - Local Docker Deployment</p>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});