class MathAgent {
    reply(message) {
        try {
            const answer = Function(`return (${message})`)();
            return `Answer: ${answer}`;
        } catch {
            return "Invalid math expression.";
        }
    }
}

module.exports = MathAgent;