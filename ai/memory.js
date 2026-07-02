const fs = require("fs");
const path = require("path");

class Memory {

    constructor() {

        this.file = path.join(__dirname, "../database/memory.json");

        if (!fs.existsSync(this.file)) {
            fs.writeFileSync(this.file, JSON.stringify({
                history: []
            }, null, 4));
        }

    }

    load() {

        return JSON.parse(
            fs.readFileSync(this.file, "utf8")
        );

    }

    save(data) {

        fs.writeFileSync(
            this.file,
            JSON.stringify(data, null, 4)
        );

    }

    addHistory(role, message) {

        const data = this.load();

        if (!data.history) {
            data.history = [];
        }

        data.history.push({
            role,
            message,
            time: new Date().toISOString()
        });

        this.save(data);

    }

    get(key) {
        return this.load()[key];
    }

    set(key, value) {

        const data = this.load();
        data[key] = value;
        this.save(data);

    }

    getAll() {
        return this.load();
    }

}

module.exports = Memory;