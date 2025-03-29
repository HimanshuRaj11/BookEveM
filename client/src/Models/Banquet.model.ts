import mongoose, { Document, Model, models, Schema } from 'mongoose';

export interface Ifile {
    public_id: string;
    asset_id: string;
    version: number;
    version_id: string;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    created_at: string;
    bytes: number;
    type: string;
    etag: string;
    placeholder: boolean;
    url: string;
    secure_url: string;
    folder: string;
    api_key: string;
}

interface IBanquet extends Document {
    Owner: mongoose.Schema.Types.ObjectId;
    Name: string;
    Description: string;
    Image?: Ifile[];
    rating: number;
    contactNumber: string;
    WhatsappNumber: string;
    isVerified: boolean;
    State: string;
    City: string;
    PinCode: string;
    Landmark: string;
    Address: string;
    MinPrice: number;
    MaxPrice: number;
    Email: string;
    IsParking: boolean;
}
export const file = {
    asset_id: { type: String, },
    public_id: { type: String, },
    version: { type: Number, },
    version_id: { type: String, },
    signature: { type: String, },
    width: { type: Number },
    height: { type: Number, },
    format: { type: String, },
    resource_type: { type: String, },
    created_at: { type: String, },
    bytes: { type: Number, },
    type: { type: String, },
    etag: { type: String, },
    placeholder: { type: Boolean, },
    url: { type: String, },
    secure_url: { type: String, },
    folder: { type: String, },
    api_key: { type: String, },
}

const BanquetSchema: Schema<IBanquet> = new Schema({
    Owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    Name: { type: String, },
    Description: { type: String, },
    Image: [file],
    rating: { type: Number, },
    contactNumber: { type: String, },
    WhatsappNumber: { type: String, },
    isVerified: { type: Boolean, },
    State: { type: String, },
    City: { type: String, },
    PinCode: { type: String, },
    Landmark: { type: String, },
    Address: { type: String, },
    MinPrice: { type: Number, },
    MaxPrice: { type: Number, },
    Email: { type: String, },
    IsParking: { type: Boolean, },
}, { timestamps: true });

const Banquet: Model<IBanquet> = models.Banquet || mongoose.model<IBanquet>('Banquet', BanquetSchema);

export default Banquet;