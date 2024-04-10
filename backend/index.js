import dotenv from "dotenv";
import connectDB from "./src/db/index.js";
import { app } from "./src/app.js";
import cors from "cors";
import bodyParser from "body-parser";
import Schedule from "./src/routes/schedule.route.js";
import session from 'express-session';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import Contact from "./src/routes/contact.route.js";
import Subscribers from "./src/routes/subscribers.route.js";
import Gallery from "./src/routes/gallery.route.js";
import Languages from "./src/routes/translate.route.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "./src/models/user.model.js";

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

app.use(passport.initialize());
app.use(passport.session());

const saltRounds = 10;

connectDB()
  .then(() => {
    app.use('/Schedule', Schedule);
    app.use('/Contact', Contact);
    app.use('/Subscribers', Subscribers);
    app.use('/Gallery', Gallery);
    app.use('/Languages', Languages);
    app.use(passport.initialize());


    // Passport Local Strategy
    passport.use(new LocalStrategy(
      { usernameField: 'email', passwordField: 'password' },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });

          if (!user) {
            return done(null, false, { message: 'Incorrect email or password' });
          }

          const isMatch = await bcrypt.compare(password, user.password);

          if (!isMatch) {
            return done(null, false, { message: 'Incorrect email or password' });
          }

          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    ));

    // Signup Route
    app.post('/Signup', async (req, res) => {
      const { email, password } = req.body;

      try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
          email,
          password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
    });

    // Login Route
    app.post('/Login', async (req, res) => {
      try {
        passport.authenticate('local', { session: false }, (error, user, info) => {
          if (error) {
            throw error;
          }
          if (!user) {
            return res.status(400).json({ message: info.message });
          }
          req.login(user, { session: false }, (loginError) => {
            if (loginError) {
              throw loginError;
            }
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            res.status(200).json({ message: 'Login successful', token, email: user.email });
          });
        })(req, res);
      } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });

    // Logout route
    app.get('/logout', (req, res) => {
      req.logout(() => {
        res.json({ message: 'Logout successful' });
      });
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection FAILED !!!", err);
  });