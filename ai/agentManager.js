const ChatAgent = require("./agents/chatAgent");
const MathAgent = require("./agents/mathAgent");
const CodeAgent = require("./agents/codeAgent");

class AgentManager {

    constructor() {
        this.chat = new ChatAgent();
        this.math = new MathAgent();
        this.code = new CodeAgent();
    }

    run(type, message) {

        switch (type) {

            case "math":
                return this.math.reply(message);

            case "code":
                return this.code.reply(message);

            default:
                return this.chat.reply(message);

        }

    }

}

module.exports = AgentManager;