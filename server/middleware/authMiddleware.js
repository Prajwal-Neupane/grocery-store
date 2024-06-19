import jwt from "jsonwebtoken";
import User from "../models/User.js";

const checkIsUserAuthenticated = async (req, res, next) => {
  let token;
  try {
    // Extract token from Authorization header
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith("Bearer ")) {
      token = authorization.split(" ")[1];

      // Verify Token
      const decoded = jwt.verify(token, "MERN");

      // Find user based on decoded token
      const user = await User.findOne({ where: { id: decoded.userId } });

      if (!user) {
        return res.status(401).json({ message: "User not authorized" });
      }

      // Attach user object to request object for use in subsequent middleware/routes
      req.user = user;
      next();
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return res
      .status(401)
      .json({ message: "Unauthorized", error: error.message });
  }
};

export default checkIsUserAuthenticated;
