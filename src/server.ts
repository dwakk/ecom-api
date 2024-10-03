import express, { NextFunction, Request } from "express";
import sequelize from "./config/connection";
import router from "./routes";
import { errorHandler } from "./middleware/error";

const app = express();

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