const coder = require("../skills/coder");

class CodeAgent {
    reply(message) {
        return coder.run(message);
    }
}

module.exports = CodeAgent;