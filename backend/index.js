import dotenv from "dotenv";
import connectDB from "./src/db/index.js";
import { app } from "./src/app.js";
import cors from "cors";
import bodyParser from "body-parser";
import Schedule from "./src/routes/schedule.route.js";
import session from 'express-session';
import Contact from "./src/routes/contact.route.js";
import Subscribers from "./src/routes/subscribers.route.js";
import Gallery from "./src/routes/gallery.route.js";
import Languages from "./src/routes/translate.route.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "./src/models/user.model.js";
import scheduleUpdater from "./src/utils/trigger.js"
dotenv.config({
  path: "./env",
});

app.use(cors());
app.use(bodyParser.json());


app.use(session({
  secret: 'papri-chat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 3 * 60 * 60 * 1000 // 3 ghanta 
  }
}));

connectDB()
  .then(() => {
    scheduleUpdater.start();
    app.use('/Schedule', Schedule);
    app.use('/Contact', Contact);
    app.use('/Subscribers', Subscribers);
    app.use('/Gallery', Gallery);
    app.use('/Languages', Languages);
    app.use('/Languages', Languages);
    app.use('/Auth', Auth);

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection FAILED !!!", err);
  });