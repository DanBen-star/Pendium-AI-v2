class Router {

    route(intent) {

        switch (intent) {

            case "math":
                return "math";

            case "code":
                return "code";

            default:
                return "chat";

        }

    }

}

module.exports = Router;