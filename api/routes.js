const express = require("express");

const Brain = require("../ai/brain");

const router = express.Router();

const brain = new Brain();

router.get("/", (req, res) => {
    res.json({
        status: "online",
        name: "Pendium AI",
        version: "0.9.0",
        message: "The Future Is Pending."
    });
});

router.post("/chat", async (req, res) => {

    const message = (req.body.message || "").trim();

    if (!message) {
        return res.status(400).json({
            error: "Message is required"
        });
    }

    try {
        const reply = await brain.think(message);

        res.json({
            success: true,
            message,
            reply
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }

});

module.exports = router;