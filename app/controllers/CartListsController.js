export const CreateCart = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Cart Created'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const ReadCart = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Cart read'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const UpdateCart = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Cart update'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const RemoveCart = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Cart remove'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}