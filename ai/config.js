const fs = require("fs");
const path = require("path");

class Config {

    constructor() {

        const file = path.join(__dirname, "../config/config.json");

        this.config = JSON.parse(
            fs.readFileSync(file, "utf8")
        );

    }

    get(key) {
        return this.config[key];
    }

    getAll() {
        return this.config;
    }

}

module.exports = Config;
