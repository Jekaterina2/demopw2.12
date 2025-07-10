import * as dotenv from 'dotenv';
dotenv.config();

const appUrl = process.env.APP_URL;

if (!appUrl) {
    throw new Error("APP_URL is not defined in environment variables");
}

console.log("App URL is:", appUrl);