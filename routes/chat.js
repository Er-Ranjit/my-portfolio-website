const express = require("express");
const router = express.Router();

const chat = require("../gemini");

router.post("/", async (req, res) => {
    try {
        const { message } = req.body;

        const reply = await chat(message);

        res.json({
            success: true,
            reply
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "AI Error"
        });
    }
});

module.exports = router;