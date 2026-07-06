const Friendly = require("./personalities/friendly");
const Dark = require("./personalities/dark");

class Personality {

    constructor() {

        this.personalities = {
            friendly: new Friendly(),
            dark: new Dark()
        };

        this.current = "friendly";

    }

    set(name) {

        if (this.personalities[name]) {
            this.current = name;
        }

    }

    get() {

        return this.personalities[this.current];

    }

}

module.exports = Personality;