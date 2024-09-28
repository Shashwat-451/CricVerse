import { User } from "../models/userSchema";
import jwt from "jsonwebtoken";

class UserMiddleware {
    // Middleware for checking if user is authenticated
    async isAuthenticated(req, res, next) {
        try {
            // Get token from cookies, body, or Authorization header
            const token = req.cookies.token || req.body.token || req.header("Authorization")?.replace("Bearer ", "");

            // Check if token is present
            if (!token) {
                return res.status(401).json({
                    success: false,
                    message: "Authentication token is missing"
                });
            }

            try {
                // Verify the JWT token
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                req.user = decoded; // Attach decoded data to req.user
                next(); // Proceed to the next middleware or route handler
            } catch (error) {
                return res.status(401).json({
                    success: false,
                    message: "JWT verification failed"
                });
            }

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Authentication failed"
            });
        }
    }

    // Middleware for checking if user is admin
    async isAdmin(req, res, next) {
        try {
            const { email } = req.user; // Extract email from authenticated user
            const user = await User.findOne({ email });

            // Check if the user is an admin
            if (user.accountType !== "Admin") {
                return res.status(403).json({
                    success: false,
                    message: "You are not authorized to access this page"
                });
            }

            next(); // Proceed to the next middleware or route handler

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Authorization failed"
            });
        }
    }
}

export default new UserMiddleware();
