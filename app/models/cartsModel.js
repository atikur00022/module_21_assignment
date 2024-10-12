import mongoose, {Mongoose} from 'mongoose';

const CartSchema = new mongoose.Schema(
    {
        color: { type: String, required: true },
        size: { type: String, required: true },
        qty: { type: String, required: true },
        price: { type: String, required: true },
        product_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'products', required: true },
        user_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'users', required: true  },
    },
    {
        timestamps: true,
        versionKey: false,
    }
    );

const CartsModel = mongoose.model('carts', CartSchema);

export default CartsModel; 