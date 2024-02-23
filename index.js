import express, { json } from "express";
const app = express();
import cors from "cors";

app.use(json());
app.use(cors());

import db from "./models/index.js";

// Routers
import postRouter from "./routes/Posts.js";
app.use("/posts", postRouter);
import commentsRouter from "./routes/Comments.js";
app.use("/comments", commentsRouter);
import usersRouter from "./routes/Users.js";
app.use("/auth", usersRouter);
import likesRouter from "./routes/Likes.js";
app.use("/likes", likesRouter);

// db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
// });