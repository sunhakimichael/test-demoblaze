import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  BASE_URL: process.env.BASE_URL || "https://www.demoblaze.com",
  USERNAME: process.env.USERNAME || "your_username",
  PASSWORD: process.env.PASSWORD || "your_password",
};