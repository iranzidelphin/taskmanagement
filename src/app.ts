import express from "express";
import authRoutes from "./routes/auth.routes";
import taskRoutes from "./routes/task.routes";


import errorMiddleware from "./middlewares/error.middleware";
import notFoundMiddleware from "./middlewares/not-found.middleware";


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Task Management API");
}
);

app.use("/api/auth", authRoutes);
app.use("/api/task", taskRoutes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;
