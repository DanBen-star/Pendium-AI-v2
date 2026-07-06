class Intents {
    detect(message) {
        message = message.toLowerCase();

        if (/^[0-9+\-*/(). ]+$/.test(message))
            return "math";

        if (
            message.includes("website") ||
            message.includes("html") ||
            message.includes("css") ||
            message.includes("javascript") ||
            message.includes("code")
        )
            return "code";

        if (
            message.includes("weather") ||
            message.includes("temperature")
        )
            return "weather";

        if (
            message.includes("translate")
        )
            return "translate";

        return "chat";
    }
}

module.exports = Intents;