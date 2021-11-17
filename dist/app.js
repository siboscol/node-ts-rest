"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const winston = __importStar(require("winston"));
const expressWinston = __importStar(require("express-winston"));
const cors_1 = __importDefault(require("cors"));
const users_routes_config_1 = require("./users/users.routes.config");
const debug_1 = __importDefault(require("debug"));
const app = (0, express_1.default)();
const server = http.createServer(app);
const port = 3000;
const routes = [];
const debugLog = (0, debug_1.default)('app');
// here we are adding middleware to parse all incoming requests as JSON
app.use(express_1.default.json());
// here we are adding middleware to allow cross-origin requests
app.use((0, cors_1.default)());
// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true }))
};
if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}
// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));
// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
routes.push(new users_routes_config_1.UsersRoutes(app));
// this is a simple route to make sure everything is working properly
const runningMessage = `Server running at http://localshot:${port}`;
app.get('/', (req, res) => {
    res.status(200).send(runningMessage);
});
server.listen(port, () => {
    routes.forEach((route) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    // our only exception to avoiding console.log(), because we
    // always want to know when the server is done starting up
    console.log(runningMessage);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUE2QjtBQUM3QiwyQ0FBNEI7QUFFNUIsaURBQWtDO0FBQ2xDLGdFQUFpRDtBQUNqRCxnREFBdUI7QUFFdkIscUVBQXlEO0FBQ3pELGtEQUF5QjtBQUV6QixNQUFNLEdBQUcsR0FBd0IsSUFBQSxpQkFBTyxHQUFFLENBQUE7QUFDMUMsTUFBTSxNQUFNLEdBQWdCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDbEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFBO0FBQ2pCLE1BQU0sTUFBTSxHQUE4QixFQUFFLENBQUE7QUFDNUMsTUFBTSxRQUFRLEdBQW9CLElBQUEsZUFBSyxFQUFDLEtBQUssQ0FBQyxDQUFBO0FBRTlDLHVFQUF1RTtBQUN2RSxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUV2QiwrREFBK0Q7QUFDL0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUE7QUFFZiw2RUFBNkU7QUFDN0UsdUVBQXVFO0FBQ3ZFLE1BQU0sYUFBYSxHQUFpQztJQUNsRCxVQUFVLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUNyQixPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUN2QztDQUNGLENBQUE7QUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7SUFDdEIsYUFBYSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUEsQ0FBQyxpREFBaUQ7Q0FDN0U7QUFFRCxxREFBcUQ7QUFDckQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7QUFFN0Msa0RBQWtEO0FBQ2xELHVGQUF1RjtBQUN2RixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksaUNBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBRWpDLHFFQUFxRTtBQUNyRSxNQUFNLGNBQWMsR0FBRyxzQ0FBc0MsSUFBSSxFQUFFLENBQUE7QUFDbkUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtJQUMzRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUN0QyxDQUFDLENBQUMsQ0FBQTtBQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBeUIsRUFBRSxFQUFFO1FBQzNDLFFBQVEsQ0FBQyx5QkFBeUIsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUN0RCxDQUFDLENBQUMsQ0FBQTtJQUNGLDJEQUEyRDtJQUMzRCwwREFBMEQ7SUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUM3QixDQUFDLENBQUMsQ0FBQSJ9