const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3005;
const buildDir = path.join(__dirname, "build");

app.use((req, res, next) => {
  const ts = new Date().toISOString();
  console.log(`[frontend-hit] ${ts} ${req.method} ${req.originalUrl}`);
  next();
});

app.use(express.static(buildDir));

app.use((req, res) => {
  res.sendFile(path.join(buildDir, "index.html"));
});

app.listen(port, () => {
  console.log(`[frontend-start] Frontend server running on port ${port}`);
});
