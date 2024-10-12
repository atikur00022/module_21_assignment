export const CreateInvoice = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Invoice Created'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const ReadInvoice = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Invoice read'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const ReadInvoiceDetails = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Invoice details read'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}


