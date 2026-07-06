const coder = require("../skills/coder");

module.exports = function (message) {
    return coder.run(message);
};