const codeTool = require("../tools/code");

class CodeAgent {

    reply(message) {

        return codeTool(message);

    }

}

module.exports = CodeAgent;