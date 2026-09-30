"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const not_found_middleware_1 = __importDefault(require("./middlewares/not-found.middleware"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Welcome to the Task Management API");
});
app.use("/api/auth", auth_routes_1.default);
app.use("/api/task", task_routes_1.default);
app.use(not_found_middleware_1.default);
app.use(error_middleware_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map