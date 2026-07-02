class Router {

    route(message) {

        const text = message.toLowerCase();

        // Math
        if (/^[0-9+\-*/(). ]+$/.test(text)) {
            return "math";
        }

        // Coding
        if (
            text.includes("code") ||
            text.includes("website") ||
            text.includes("html") ||
            text.includes("css") ||
            text.includes("javascript") ||
            text.includes("project") ||
            text.includes("app")
        ) {
            return "coder";
        }

        // Search
        if (
            text.startsWith("search ") ||
            text.startsWith("find ")
        ) {
            return "search";
        }

        // Weather
        if (
            text.includes("weather") ||
            text.includes("temperature")
        ) {
            return "weather";
        }

        return "chat";

    }

}

module.exports = Router;