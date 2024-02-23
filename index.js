import express, { json } from "express";
import postRouter from "./routes/Posts.js";
import cors from "cors";
import commentsRouter from "./routes/Comments.js";
import usersRouter from "./routes/Users.js";
import likesRouter from "./routes/Likes.js";
import db from "./models/index.js";

const app = express();

app.use(json());
app.use(cors());

// Routers
app.use("/posts", postRouter);
app.use("/comments", commentsRouter);
app.use("/auth", usersRouter);
app.use("/likes", likesRouter);

// db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
// });