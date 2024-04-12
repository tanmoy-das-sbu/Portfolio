import jwt from 'jsonwebtoken';
import User from '../../models/user.model.js';

const authenticateJWT = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decodedToken.id);

            if (!user) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        } catch (err) {
            return res.sendStatus(403);
        }
    } else {
        res.sendStatus(401);
    }
};

export default authenticateJWT;