import express from "express";
import sequelize from "./config/connection";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("Hello World!");
});

sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server started on port 3000");
    });
});