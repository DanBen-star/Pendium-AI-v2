const Memory = require("./memory");
const Reasoning = require("./reasoning");

class Brain {

    constructor() {

        console.log("Pendium AI Brain Initialized...");

        this.memory = new Memory();
        this.reasoning = new Reasoning();

    }

    think(message) {

        this.memory.addHistory("user", message);

        const reply = this.reasoning.process(message);

        this.memory.addHistory("assistant", reply);

        const data = this.memory.load();

        data.lastMessage = message;
        data.lastSeen = new Date().toLocaleString();

        this.memory.save(data);

        return reply;

    }

}

module.exports = Brain;