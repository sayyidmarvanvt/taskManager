import { rateLimit } from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 5,
  message: "Too many requests, please try again after 15 minutes",
  skipSuccessfulRequests: true,
  standardHeaders: true,
  legacyHeaders: false,
});
