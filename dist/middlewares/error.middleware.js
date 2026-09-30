"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        message: "Internal server error"
    });
};
exports.default = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map