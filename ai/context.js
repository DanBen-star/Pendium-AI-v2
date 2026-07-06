class Context {

    constructor() {

        this.history = [];

    }

    add(user, message) {

        this.history.push({
            user,
            message,
            time: Date.now()
        });

        if (this.history.length > 100) {

            this.history.shift();

        }

    }

    getHistory() {

        return this.history;

    }

}

module.exports = new Context();