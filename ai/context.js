class Context {

    constructor() {
        this.current = null;
    }

    set(context) {
        this.current = context;
    }

    get() {
        return this.current;
    }

    clear() {
        this.current = null;
    }

}

module.exports = Context;