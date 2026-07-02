const Memory = require("./memory");
const Parser = require("./parser");
const AgentManager = require("./agentManager");
const Router = require("./router");

class Reasoning {

    constructor() {

        this.memory = new Memory();
        this.parser = new Parser();
        this.agents = new AgentManager();
        this.router = new Router();

    }

    process(message) {

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

        }

        const agent = this.router.route(message);

        switch (agent) {

            case "math":
                return this.agents.run("MATH", message);

            case "coder":
                return this.agents.run("CODE", message);

            case "chat":
            default:
                return this.agents.run("CHAT", message);

        }

    }

}

module.exports = Reasoning;