import mongoose, { Mongoose } from "mongoose";

const InvoicesSchema = new Mongoose.Schema(
    {
        total: { type: String, required: true },
        vat: { type: String, required: true },
        payable: { type: String, required: true },
        cus_details: { type: String, required: true },
        ship_details: { type: String, required: true },
        ship_details: { type: String, required: true },
        val_id: { type: String, required: true },
        tran_id: { type: String, required: true },
        delivery_status: { type: String, required: true },
        payment_status: { type: String, required: true },
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true }, 
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const InvoicesModel = mongoose.model("invoices", InvoicesSchema);

export default InvoicesModel;