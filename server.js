const express = require("express");
const app = express();
const path = require("path");

// Serve static files (adjust for your setup)
app.use(express.static(path.join(__dirname, "public")));

// Your routes here (if any)
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Get the port from the environment variable (Render sets this automatically)
const PORT = process.env.PORT || 3000;  // Default to 3000 for local development

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});