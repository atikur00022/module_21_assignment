import bcrypt from "bcrypt";
import {ValidEmail} from "../utility/ValidEmail.js";
import UsersModel from "../models/usersModel.js";
import {TokenEncoded} from "../utility/TokenUtility.js";
import {ObjectId} from "mongodb";
import {DEFAULT_IMAGE, IMAGE_PATH} from "../config/config.js";
import fs from 'fs';
import path from "path";
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// Registration
export const RegistrationService = async (req) => {
    try{

        const {firstName,lastName,email,mobileNumber,password} = req.body;
        const EncryptedPassword = await bcrypt.hash(password, 10);

        const PostJsonData = {
            firstName,
            lastName,
            email,
            mobileNumber,
            password: EncryptedPassword,
        }

        if(!firstName){
            return { status: 'fail', message: 'First Name is required!' };
        }else if (!lastName){
            return { status: 'fail', message: 'Last Name is required!' };
        }else if (!email){
            return { status: 'fail', message: 'Email Name is required!' };
        }else if(!ValidEmail(email)){
            return { status: 'fail', message: 'Invalid Email!' };
        }else if (!mobileNumber){
            return { status: 'fail', message: 'Mobile Number is required!' };
        }else if (!password){
            return { status: 'fail', message: 'Password is required!' };
        }else {

            const isUserExist = await UsersModel.find({email: email});

            if(isUserExist.length > 0){
                return { status: 'fail', message: 'User already exist!' };
            }else {

                const data = UsersModel.create(PostJsonData);
                return { status: 'success', message: 'Registration completed successfully!' };

            }

        }

    }catch (e) {
        return { status: 'fail', data: e.toString() };
    }
}

export const LoginService = async (req, res) => {

    try{

        const {email, password} = req.body;

        const PostJsonData = {
            email,
            password
        };

        if(!email){
            return { status: 'fail', message: 'Email is required!' };
        }else if(!ValidEmail(email)){
            return { status: 'fail', message: 'Invalid Email!' };
        }if(!password){
            return { status: 'fail', message: 'Password is required!' };
        }else {

            const isUserExist = await UsersModel.find({email: email});

            if(isUserExist.length > 0){

                const MatchingPassword = await bcrypt.compare(password, isUserExist[0]['password']);

                if(MatchingPassword){

                    const token = TokenEncoded(isUserExist[0]['email'], isUserExist[0]['_id']);

                    const options = {
                        maxAge: 30 * 24 * 60 * 60 * 1000,
                        httpOnly: true,
                        sameSite: "none",
                        secure: true,
                    };

                    res.cookie('Token', token, options);

                    return { status: 'success', message: 'Login completed successfully!' };
                }else {
                    return { status: 'fail', message: 'Incorrect password!' };
                }

            }else{
                return { status: 'fail', message: 'User not found!' };
            }

        }


    }catch (e) {
        return { status: 'fail', data: e.toString() };
    }

}

export const ReadProfileService = async (req) => {
    try{

        const email = req.headers['email'];
        const userId = new ObjectId(req.headers['userId']);
        // console.log(userId)

        const MatchingStage = {$match: {"_id": userId}};

        const ProjectStage = {$project: {
                "password": 0,
                "otp": 0,
            }};

        const data = await UsersModel.aggregate([
            MatchingStage,
            ProjectStage
        ]);

        return { status: 'success', message: 'Profile read successfully!', data: data };
    }catch (e) {
        return { status: 'fail', data: e.toString() };
    }
}

export const UpdateProfileService = async (req) => {
    try{

        const userId = new ObjectId(req.headers['userId']);

        const PostJsonData = req.body;

        if(req.body['password']){
            let EncryptedPassword = await bcrypt.hash(req.body['password'], 10);
            PostJsonData['password'] = EncryptedPassword;

            await UsersModel.updateOne({"_id": userId}, {$set: PostJsonData});
            return { status: 'success', message: 'Profile updated successfully!' };
        }else {
            await UsersModel.updateOne({"_id": userId}, {$set: PostJsonData});
            return { status: 'success', message: 'Profile updated successfully!' };
        }

    }catch (e) {
        return { status: 'fail', data: e.toString() };
    }
}

export const UploadSingleImageService = async (req, res) => {
    try {

        const userId = new ObjectId(req.headers['userId']);

        const user = await UsersModel.findOne({_id: userId});

        if(user && user["image"]){
            const prevImagePath = user["image"].replace(IMAGE_PATH, '');
            // console.log('perPath', prevImagePath)
            if(prevImagePath === '/uploads/avatar.png'){

                if (!req.file) {
                    return res.status(400).json({ message: "Image is required!" });
                }

                const imagePath = req.file.path;
                // console.log(imagePath)

                const image = `${IMAGE_PATH}/${imagePath}`

                await UsersModel.updateOne({"_id": userId},{$set: {image: image}});

                return { status: 'success', message: 'Image uploaded successfully!' };

            }else{
                const fullPrevImagePath = path.join(__dirname, "../../" , prevImagePath);

                // console.log('perPath', prevImagePath)
                // console.log('fullPath', fullPrevImagePath)

                await fs.unlink(fullPrevImagePath, (err) =>{
                    if(err){
                        return { status: 'fail', data: err.toString() };
                    }
                });

                if (!req.file) {
                    return res.status(400).json({ message: "Image is required!" });
                }

                const imagePath = req.file.path;
                // console.log(imagePath)

                const image = `${IMAGE_PATH}/${imagePath}`

                await UsersModel.updateOne({"_id": userId},{$set: {image: image}});

                return { status: 'success', message: 'Image uploaded successfully!' };

            }

        }

    }catch (e) {
        return { status: 'fail', data: e.toString() };
    }
}

// Read File
export const ReadFileService = async (req) => {
    try{

        const filename = req.params.filename;
        const filePath = path.join(__dirname, '../../uploads', filename);
        // console.log(filePath)

        return{ status: 'success', message: 'File read successfully!', data: filePath };
    }catch (e) {
        return { status: 'fail', data: e.toString() };
    }
}


// Delete Single File
export const DeleteSingleFileService = async (req) => {
    try{

        const userId = new ObjectId(req.headers['userId']);

        const filename = req.params.filename;

        if(filename === 'avatar.png'){
            return { status: 'fail', message: 'This file can not be deleted!' };
        }else {
            const filePath = path.join(__dirname, '../../uploads', filename);
            // console.log(filePath)

            // Check file existence
            if(fs.existsSync(filePath) === true){
                await fs.unlink(filePath, (err) => {
                    if(err){
                        return { status: 'fail', message: 'Error file deleting!' };
                    }
                });
                await UsersModel.updateOne({_id: userId},{$set: {image: DEFAULT_IMAGE}});
            }else {
                return { status: 'fail', message: 'File not found!' };
            }

            return { status: 'success', message: 'File deleted successfully!' };
        }


    }catch (e) {
        return { status: 'fail', data: e.toString() };
    }
}





























