const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Task = require("./models/Task");
require("dotenv").config();
const app = express();
app.use(express.json());

app.use(cors(
    {
        origin: ["todo-cli-gunas-projects-65696d9d.vercel.app"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
));

mongoose
    .connect(process.env.MONGODB)
    .then(() => {
        console.log("connection established");
    })
    .catch(err => {
        console.log(err.message);
    })

app.get("/", async (req, res) => {
    const Data = await Task.find();
    res.send(Data);
    res.json("hell");
});

app.post("/add-task", async (req, res) => {
    const task = req.body;

    try {
        const data = new Task(task);
        await data.save();
        res.send({ success: true, message: "Task added successfully" });
    } catch (error) {
        console.log(error);
    }
});

app.put("/update", async (req, res) => {
    const { id, ...rest } = req.body;
    await Task.updateOne({ _id: id }, rest);
    res.send("success");
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const data = await Task.deleteOne({ _id: id });
    res.send({ success: true, message: "delete success", data: data });
});

app.listen(process.env.PORT, () => {
    console.log("listening on port 8080");
});
