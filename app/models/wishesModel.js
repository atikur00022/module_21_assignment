import mongoose, {Mongoose} from 'mongoose';

const WishesSchema = new mongoose.Schema(
    {
        product_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'products', required: true },
        user_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'users', required: true  },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const WishesModel = mongoose.model('wishes', WishesSchema);

export default WishesModel;