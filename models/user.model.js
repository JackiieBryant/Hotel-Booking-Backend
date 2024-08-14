import mongoose from "mongoose";
const {Schema} = mongoose
import bcrypt from "bcryptjs";


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

userSchema.pre("save", function (next) {
    let user = this;

    if (user.isModified("password")) {
        return bcrypt.hash(user.password, 12 , function (err, hash) {
            if (err) {
                console.log("BCRYPT HASH ERR ", err);
                return next(err);
            }
            user.password = hash;
            return next();
        })
    }else {
        return next();
    }
});

export default mongoose.model("User", userSchema);
