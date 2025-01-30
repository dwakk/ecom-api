import express, { NextFunction, Request } from "express";
import cors from "cors";
import sequelize from "./config/connection";
import router from "./routes";
import { errorHandler } from "./middleware/error";
import { RedisClient } from "./cache/redis";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors(
    {
        origin: process.env.FRONTEND_URL,
        credentials: true
    }
));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.use(errorHandler);


app.get("/", (req, res) => {
    res.send("Hello World!");
});

sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server started on port 3000");
    });
});

RedisClient.connect();