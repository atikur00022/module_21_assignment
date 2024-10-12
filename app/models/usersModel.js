import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, unique: true, required: true, lowercase: true, trim: true },
        otp: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false
    }
    );

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;