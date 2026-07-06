const fs = require("fs");
const path = require("path");

class SkillLoader {

    constructor() {

        this.skills = {};

        const folder = path.join(__dirname, "skills");

        const files = fs.readdirSync(folder);

        files.forEach(file => {

            if (!file.endsWith(".js")) return;

            const name = file.replace(".js", "");

            this.skills[name] = require(path.join(folder, file));

        });

    }

    get(name) {

        return this.skills[name];

    }

    list() {

        return Object.keys(this.skills);

    }

}

module.exports = SkillLoader;