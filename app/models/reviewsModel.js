import mongoose from "mongoose";

const ReviewSchema = new Mongoose.Schema(
    {
        discription:{ type: String, required: true },
        rating: { type: String, required: true},
        customer_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'profiles', required: true},
        product_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'products', required: true},
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ReviewsModel = mongoose.model("reviews", ReviewSchema);
 
export default ReviewsModel;