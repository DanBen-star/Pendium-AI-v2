const fs = require("fs");
const path = require("path");

class ProjectGenerator {

    create(name, html, css, js) {

        const folder = path.join("generated", name);

        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder, { recursive: true });
        }

        fs.writeFileSync(
            path.join(folder, "index.html"),
            html
        );

        fs.writeFileSync(
            path.join(folder, "style.css"),
            css
        );

        fs.writeFileSync(
            path.join(folder, "script.js"),
            js
        );

        return `Project created successfully!

Location:

${folder}`;
    }

}

module.exports = ProjectGenerator;