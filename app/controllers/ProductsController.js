export const ProductListByCategory = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Product List By Category'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const ProductListByRemark = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Product List By Remark'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const ProductListByBrand = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Product List By Brand'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const ProductListBySlider = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Product List By Slider'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const ProductListByKeyword = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Product List By Keyword'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const ProductDetailsByID = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Product Details By ID'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const ProductReviewListByID = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Product Review List'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const CreateProductReview = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Create Product Review'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}

export const UpdateProductReview = async (req, res) => {
    try {
        res.status(200).json({status: 'success', message: 'Update Product Review'});
    }catch(err) {
        res.status(500).json({status: 'error', message: err.message});
    }
}