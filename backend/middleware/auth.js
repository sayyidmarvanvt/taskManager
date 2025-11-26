import jwt from "jsonwebtoken";
import userModal from "../models/userModal.js";

const authMiddleware = async (req, res, next) => {
  console.log("reached in middlware");
  
  try {
    const header = req.headers.authorization;
    console.log("header");
    
    if (!header) return res.status(401).json({ message: "No token" });
    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    
    req.user = await userModal.findById(decoded.userId).select("-password");
    console.log(req.user);
    
    if (!req.user) return res.status(401).json({ message: "Invalid token" });
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token error", error: err.message });
  }
};

export default authMiddleware;
