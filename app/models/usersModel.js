import mongoose from 'mongoose';
import {DEFAULT_IMAGE} from "../config/config.js";

const DataSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, unique: true, required: true, lowercase: true, trim: true },
        mobileNumber: { type: String, required: true },
        image: { type: String, default: DEFAULT_IMAGE },
        otp: { type: String, default: '0' },
        password: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const UsersModel = mongoose.model('users', DataSchema);

export default UsersModel;
