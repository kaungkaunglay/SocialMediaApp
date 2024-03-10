import  express from "express";
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import PostRoutes from './routes/posts.js'
import cookieParser from "cookie-parser"
import cors from "cors";
// middlware
const app = express();
app.use((req,res, next) => {
    res.header("Access-Control-Allow-Credentials", true); 
    next()
})
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(cookieParser());
app.use('/Backend/users', userRoutes);
app.use('/Backend/posts', PostRoutes); 
app.use('/Backend/auth', authRoutes);
app.listen(8000, () => {
    console.log("API Working")
})