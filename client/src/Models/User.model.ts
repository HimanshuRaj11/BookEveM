import mongoose, { Schema, Document, Model, models } from 'mongoose';
import { file, Ifile } from './Banquet.model';


// Define the User interface
export interface IUser extends Document {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
    isOwner: boolean;
    email: string;
    phone: string;
    alternatePhone?: string;
    photo?: Ifile;
    address: string;
    banquets: mongoose.Schema.Types.ObjectId;
    password: string;
}


const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    isOwner: { type: Boolean, default: false },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    alternatePhone: { type: String },
    photo: file,
    address: { type: String },
    banquets: { type: [mongoose.Schema.Types.ObjectId], ref: "Banquet" },
    password: { type: String, required: true }
}, { timestamps: true });


const UserModel: Model<IUser> = models.User || mongoose.model<IUser>('User', UserSchema);

export default UserModel;