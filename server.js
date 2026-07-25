const express = require("express");
const path = require("path");
const Contact = require("./models/Contact");
const chat = require("./gemini");
const chatRoutes = require("./routes/chat");

const app = express();

require("./db");

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));



app.post("/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newContact = new Contact({
            name,
            email,
            message
        });

        await newContact.save();

        console.log("✅ Contact Saved:", newContact);

        res.status(201).json({
            success: true,
            message: "Contact saved successfully"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
});

app.use("/chat", chatRoutes);

app.listen(4000, () => {
    console.log("Server running on port 4000");
});