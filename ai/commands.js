const Config = require("./config");

class Commands {

    constructor() {
        this.config = new Config();
    }

    execute(command) {

        switch (command) {

            case "/help":
                return `
Available Commands

/help
/about
/version
/config
`;

            case "/about":
                return `${this.config.get("name")}
Built by ${this.config.get("owner")}`;

            case "/version":
                return this.config.get("version");

            case "/config":
                return JSON.stringify(
                    this.config.getAll(),
                    null,
                    2
                );

            default:
                return null;

        }

    }

}

module.exports = Commands;