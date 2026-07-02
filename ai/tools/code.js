const ProjectGenerator = require("../projectGenerator");

module.exports = function (request) {

    const project = new ProjectGenerator();

    const html = `<!DOCTYPE html>

<html>

<head>

<link rel="stylesheet" href="style.css">

<title>Pendium Project</title>

</head>

<body>

<h1>Welcome</h1>

<button>Click Me</button>

<script src="script.js"></script>

</body>

</html>`;

    const css = `

body{

font-family:Arial;

text-align:center;

margin-top:100px;

}

button{

padding:12px 25px;

}

`;

    const js = `

console.log("Pendium Project");

`;

    return project.create(

        "Project",

        html,

        css,

        js

    );

};