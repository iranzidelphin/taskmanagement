"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFoundmiddleware = (req, res) => {
    res.status(404).json({ message: "Route not found" });
};
exports.default = notFoundmiddleware;
//# sourceMappingURL=not-found.middleware.js.map