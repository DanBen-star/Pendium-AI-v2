class Parser {

    parse(message) {

        const text = message.trim();

        const lower = text.toLowerCase();

        // Greeting

        if (
            lower === "hi" ||
            lower === "hello" ||
            lower === "hey"
        ) {

            return {
                intent: "GREETING"
            };

        }

        // Save Name

        let match;

        match = text.match(/^my name is (.+)$/i);

        if (match) {

            return {

                intent: "SET_NAME",

                entities: {
                    name: match[1].trim()
                }

            };

        }

        match = text.match(/^i'?m (.+)$/i);

        if (match) {

            return {

                intent: "SET_NAME",

                entities: {
                    name: match[1].trim()
                }

            };

        }

        match = text.match(/^call me (.+)$/i);

        if (match) {

            return {

                intent: "SET_NAME",

                entities: {
                    name: match[1].trim()
                }

            };

        }

        if (
            lower === "what's my name" ||
            lower === "what is my name"
        ) {

            return {
                intent: "GET_NAME"
            };

        }

        return {
            intent: "UNKNOWN"
        };

    }

}

module.exports = Parser;