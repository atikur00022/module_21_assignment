export const BrandList = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Brand list'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}