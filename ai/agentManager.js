const ChatAgent = require("./agents/chatAgent");
const CodeAgent = require("./agents/codeAgent");
const MathAgent = require("./agents/mathAgent");

class AgentManager {

    constructor() {

        this.chat = new ChatAgent();
        this.code = new CodeAgent();
        this.math = new MathAgent();

    }

    run(agent, message) {

        switch (agent) {

            case "CHAT":
                return this.chat.reply(message);

            case "CODE":
                return this.code.reply(message);

            case "MATH":
                return this.math.reply(message);

            default:
                return "No suitable agent found.";

        }

    }

}

module.exports = AgentManager;