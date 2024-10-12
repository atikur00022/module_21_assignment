export const Login = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'User Login'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const VerifyLogin = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'User Verify Login'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const CreateUserProfile = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'User profle crated successfully'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const ReadUserProfile = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'User Profile read'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const UpdateUserProfile = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'User Profile update'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}