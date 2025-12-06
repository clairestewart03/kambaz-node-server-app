import express from 'express';
import mongoose from "mongoose";
import "dotenv/config";
import session from "express-session";
import Lab5 from './Lab5/index.js';
import Hello from './Hello.js';
import cors from 'cors';
import db from './Kambaz/Database/index.js';
import UserRoutes from './Kambaz/Users/routes.js';
import QuizzesRoutes from "./Kambaz/Quizzes/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModulesRoutes from "./Kambaz/Modules/routes.js";
import AssignmentsRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentsRoutes from "./Kambaz/Enrollments/routes.js";
import QuestionsRoutes from "./Kambaz/Questions/routes.js";
import StudentAttemptsRoutes from "./Kambaz/StudentAttempts/routes.js";
const CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz"
const VERCEL_PREFIX = process.env.VERCEL_PREFIX;
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors({
    credentials: true,
                 origin: (origin, callback) => {
                     if (!origin) return callback(null, true);
                     if (origin === 'http://localhost:3000') return callback(null, true);
                     if (VERCEL_PREFIX && origin.startsWith(VERCEL_PREFIX)) return callback(null, true);
                     return callback(new Error("Not allowed by CORS: " + origin));
                 }
             }));
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: false,
};
if (process.env.SERVER_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.SERVER_URL,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app, db);
CourseRoutes(app, db);
ModulesRoutes(app, db);
AssignmentsRoutes(app, db);
EnrollmentsRoutes(app, db);
QuizzesRoutes(app, db);
QuestionsRoutes(app, db);
StudentAttemptsRoutes(app, db);
Lab5(app);
Hello(app)
app.listen(process.env.PORT || 4000)

