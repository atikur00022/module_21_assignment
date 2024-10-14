import {
    DeleteSingleFileService,
    LoginService, ReadFileService,
    ReadProfileService,
    RegistrationService, UpdateProfileService,
    UploadSingleImageService
} from "../service/UserServices.js";

// Registration
export const Registration = async (req, res) => {
    const result = await RegistrationService(req);
    res.json(result);
}

// Login
export const Login = async (req, res) => {
    const result = await LoginService(req, res);
    res.json(result);
}

// Read Profile
export const ReadProfile = async (req, res) => {
    const result = await ReadProfileService(req);
    res.json(result);
}

export const UpdateProfile = async (req, res) => {
    const result = await UpdateProfileService(req);
    res.json(result);
}

// Upload Single Image
export const UploadSingleImage = async (req, res) => {
    const result = await UploadSingleImageService(req, res);
    res.json(result);
}

// Read File
export const ReadFile = async (req, res) => {
    const result = await ReadFileService(req, res);
    res.json(result);
}

// Delete Singe File
export const DeleteSingleFile = async (req, res) => {
    const result = await DeleteSingleFileService(req, res);
    res.json(result);
}
