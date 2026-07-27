const express = require("express");
const path = require("path");
const cors = require("cors");

const Contact = require("./models/Contact");
const chatRoutes = require("./routes/chat");

const app = express();
const PORT = process.env.PORT || 4000;

// Database Connection
require("./db");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Contact API
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    console.log("✅ Contact Saved:", newContact);

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
    });
  } catch (error) {
    console.error("❌ Contact Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// AI Chat Route
app.use("/chat", chatRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});