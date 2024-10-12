import mongoose from 'mongoose';

const CategoriesSchema = new mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: true,
            unique: true,
        },
        categoryImg: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const CategoriesModel = mongoose.model('categories', CategoriesSchema);

export default CategoriesModel;