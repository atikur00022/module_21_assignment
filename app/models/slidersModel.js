import mongoose from 'mongoose';

const SliderSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        short_des: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        product_id: { type: mongoose.Schema.Types.ObjectId, ref: "products" }
    },
    {
        timestamps: true,
        versionKey: false
    }
    );

const SliderModel = mongoose.model('sliders', SliderSchema);

export default SliderModel;