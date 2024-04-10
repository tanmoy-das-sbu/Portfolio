import express from 'express';
import User from '../models/user.model.js';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import passport from 'passport';
const router = express.Router();

router.use(passport.initialize());
router.use(passport.session());

const saltRounds = 10;

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

router.post('/signup', async (req, res) => {
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

router.post('/login', async (req, res) => {
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
                if(process.env.JWT_SECRET){
                    res.status(401).json({message : 'token not found'});
                } else {
                    res.status(200).json({message : 'login successfull'});
                }
               // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
                //res.status(200).json({ message: 'Login successful', token, email: user.email });
            });
        })(req, res);
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/logout', (req, res) => {
    req.logout(() => {
        res.json({ message: 'Logout successful' });
    });
});

export default router;