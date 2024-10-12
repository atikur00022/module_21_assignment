import mongoose, { Mongoose } from "mongoose";

const InvoicesProductSchema = new Mongoose.Schema(
    {
        qty: { type: String, required: true },
        price: { type: String, required: true },
        color: { type: String, required: true },
        size: { type: String, required: true },
        invoice_id: { type: Mongoose.Schema.Types.ObjectId, required: true},
        product_id: { type: Mongoose.Schema.Types.ObjectId, required: true },
        user_id: { type: Mongoose.Schema.Types.ObjectId, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const InvoicesProductModel = mongoose.model("invoicesProduct", InvoicesProductSchema);

export default InvoicesProductModel;