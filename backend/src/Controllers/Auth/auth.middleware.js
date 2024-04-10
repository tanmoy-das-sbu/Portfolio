import jwt from 'jsonwebtoken';
import User from '../../models/user.model.js';

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                return res.sendStatus(403);
            }

            try {
                const user = await User.findById(decodedToken.id);

                if (!user) {
                    return res.sendStatus(403);
                }

                req.user = user;
                next();
            } catch (error) {
                console.error(error);
                return res.sendStatus(500);
            }
        });
    } else {
        res.sendStatus(401);
    }
};

export default authenticateJWT;