const dark = require("./personalities/dark");
const friendly = require("./personalities/friendly");

class Personality {

    constructor() {
        this.current = dark; // Default personality
    }

    set(name) {

        switch (name.toLowerCase()) {

            case "friendly":
                this.current = friendly;
                break;

            default:
                this.current = dark;
        }

    }

    get() {
        return this.current;
    }

}

module.exports = Personality;