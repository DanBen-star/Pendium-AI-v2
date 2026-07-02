class Intents {

    detect(message) {

        message = message.toLowerCase();

        if (
            message.includes("hello") ||
            message.includes("hi") ||
            message.includes("hey")
        ) {
            return "GREETING";
        }

        if (
            message.includes("who are you")
        ) {
            return "ABOUT";
        }

        if (
            message.includes("time")
        ) {
            return "TIME";
        }

        if (
            message.includes("date")
        ) {
            return "DATE";
        }

        if (
            message.includes("code") ||
            message.includes("website") ||
            message.includes("html") ||
            message.includes("javascript")
        ) {
            return "CODE";
        }

        if (
            message.includes("+") ||
            message.includes("-") ||
            message.includes("*") ||
            message.includes("/") ||
            message.includes("solve")
        ) {
            return "MATH";
        }

        return "UNKNOWN";

    }

}

module.exports = Intents;