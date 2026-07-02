class Pipeline {

    constructor(parser, memory, context, agents) {

        this.parser = parser;
        this.memory = memory;
        this.context = context;
        this.agents = agents;

    }

    execute(message) {

        const request = this.parser.parse(message);

        switch (request.intent) {

            case "SET_NAME":

                this.memory.set("name", request.entities.name);

                return `Nice to meet you, ${request.entities.name}.`;

            case "GET_NAME":

                const name = this.memory.get("name");

                return name
                    ? `Your name is ${name}.`
                    : "I don't know your name yet.";

            case "GREETING":

                return this.agents.run("CHAT", message);

            default:

                const lower = message.toLowerCase();

                if (
                    lower.includes("build") ||
                    lower.includes("create") ||
                    lower.includes("make")
                ) {

                    return this.agents.run("CODE", message);

                }

                if (
                    lower.includes("+") ||
                    lower.includes("-") ||
                    lower.includes("*") ||
                    lower.includes("/")
                ) {

                    return this.agents.run("MATH", message);

                }

                return this.agents.run("CHAT", message);

        }

    }

}

module.exports = Pipeline;