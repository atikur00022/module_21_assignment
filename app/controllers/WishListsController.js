export const CreateWish = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Wish Created'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const ReadWish = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Wish read'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const UpdateWish = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Wish update'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const RemoveWish = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Wish remove'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}