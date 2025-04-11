// Import required modules
const express = require("express");
const connectDb = require("./config/dbConnections");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

// Initialize the app
const app = express();
const port = process.env.PORT || 1100; // Use environment variable or default to 8000

// Middleware for CORS
app.use(cors()); // Allow all origins, configure as needed

// Middleware for parsing JSON
app.use(express.json());

// Connect to the database
connectDb();

// Define routes
app.use("/api/contacts", require("./routes/contactRoutes")); // Route for contacts

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
