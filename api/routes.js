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

router.post("/chat", (req, res) => {

    const message = req.body.message || "";

    const reply = brain.think(message);

    res.json({
        reply
    });

});

module.exports = router;