const SkillLoader = require("./skillLoader");

class Reasoning {

    constructor() {
        this.skillLoader = new SkillLoader();
    }

    process(message) {

        const text = message.toLowerCase();

        const skills = this.skillLoader.skills;

        // Check all registered skills
        for (const name in skills) {

            const skill = skills[name];

            if (!skill.keywords || !Array.isArray(skill.keywords))
                continue;

            const matched = skill.keywords.some(keyword =>
                text.includes(keyword.toLowerCase())
            );

            if (matched) {
                return skill.run(message);
            }
        }

        // Math detection
        if (/^[0-9+\-*/(). ]+$/.test(text)) {
            return skills.calculator.run(message);
        }

        // Greetings
        if (
            text.includes("hello") ||
            text.includes("hi") ||
            text.includes("hey")
        ) {
            return "Hello! I'm Pendium AI.";
        }

        // About
        if (
            text.includes("who are you") ||
            text.includes("about")
        ) {
            return "Pendium AI v0.9.0\nThe Future Is Pending.";
        }

        return "I don't understand that yet.";
    }

}

module.exports = Reasoning;