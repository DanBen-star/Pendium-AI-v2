const fs = require("fs");
const path = require("path");

class Tools {

    constructor() {

        this.tools = {};

        const folder = path.join(__dirname, "tools");

        const files = fs.readdirSync(folder);

        files.forEach(file => {

            if (file.endsWith(".js")) {

                const name = file.replace(".js", "");

                this.tools[name] = require(path.join(folder, file));

            }

        });

    }

    run(name, data = "") {

        if (this.tools[name]) {

            return this.tools[name](data);

        }

        return this.tools["unknown"]();

    }

}

module.exports = Tools;