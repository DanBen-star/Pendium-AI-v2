const Intents = require("./intents");
const Router = require("./router");
const AgentManager = require("./agentManager");

class Pipeline {

    constructor() {

        this.intents = new Intents();
        this.router = new Router();
        this.agentManager = new AgentManager();

    }

    run(message) {

        const intent = this.intents.detect(message);

        const route = this.router.route(intent);

        return this.agentManager.run(route, message);

    }

}

module.exports = Pipeline;