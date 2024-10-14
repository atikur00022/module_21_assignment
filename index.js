import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import {
    DATABASE,
    MAX_JSON_SIZE,
    PORT,
    REQUEST_NUMBER,
    REQUEST_TIME,
    URL_ENCODE,
    WEB_CACHE
} from "./app/config/config.js";
import router from "./routes/api.js";

const app = express();

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// App Use Default Middleware
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(helmet());
app.use(cookieParser());

// App Use Limiter
const limiter=rateLimit({windowMs:REQUEST_TIME,max:REQUEST_NUMBER});
app.use(limiter);

// Cache
app.set('etag',WEB_CACHE)

// Database Connect
mongoose.connect(DATABASE,{autoIndex:true}).then(()=>{
    console.log("MongoDB connected");
}).catch(()=>{
    console.log("MongoDB disconnected");
});

app.use("/api",router)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})