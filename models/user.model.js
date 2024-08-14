import mongoose from "mongoose";
const {Schema} = mongoose


const userSchema = new Schema({
    name: {
        typeof: 'string',
        trim: true,
        required: 'Name is required'
    },
    email: {
        typeof: 'string',
        trim: true,
        required: 'Email is required',
        unique: true,
    },
    password: {
        typeof: 'string',
        required: true,
        min: 6,
        max: 64
    },
    stripe_account_id: "",
    stripe_seller: {},
    stripeSession: {},

},
    { timestamps: true},
);

export default mongoose.model("User", userSchema);
