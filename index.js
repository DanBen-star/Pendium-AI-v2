const readline = require("readline");
const Config = require("./ai/config");
const Brain = require("./ai/brain");
const Commands = require("./ai/commands");

const config = new Config();
const brain = new Brain();
const commands = new Commands();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

console.log(`
═══════════════════════════════════════

        ${config.get("name")}

Owner : ${config.get("owner")}
Version : ${config.get("version")}
Status : ONLINE

${config.get("motto")}

Type 'exit' to quit.

═══════════════════════════════════════
`);

function chat() {

    rl.question("You > ", (message) => {

        const input = message.trim();

        if (input.toLowerCase() === "exit") {

            console.log("\nPendium > Goodbye, Mr. Pending.\n");

            rl.close();

            return;

        }

        const commandResult = commands.execute(input);

        if (commandResult !== null) {

            console.log(`\n${commandResult}\n`);

            chat();

            return;

        }

        const reply = brain.think(input);

        console.log(`\nPendium > ${reply}\n`);

        chat();

    });

}

chat();