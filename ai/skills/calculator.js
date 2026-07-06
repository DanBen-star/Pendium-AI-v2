module.exports = {
    name: "Calculator",

    keywords: [
        "calculate",
        "math",
        "+",
        "-",
        "*",
        "/"
    ],

    run(message) {

        try {

            const answer = Function(`return (${message})`)();

            return `Answer: ${answer}`;

        } catch {

            return "Invalid math expression.";

        }

    }

};