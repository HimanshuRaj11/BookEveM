import mongoose, { Document, Model, models, Schema } from 'mongoose';

interface IBanquet extends Document {
    // _id: number;
    Name: string;
    Description: string;
    Image: string[];
    rating: number;
    contactNumber: string;
    WhatsappNumber: string;
    isVerified: boolean;
    Location: string;
    Minprice: number;
    MaxPrice: number;
    Email: string;
    IsParking: boolean;
}

const BanquetSchema: Schema = new Schema({
    // _id: { type: Number,  },
    Name: { type: String, },
    Description: { type: String, },
    Image: { type: [String], },
    rating: { type: Number, },
    contactNumber: { type: String, },
    WhatsappNumber: { type: String, },
    isVerified: { type: Boolean, },
    Location: { type: String, },
    Minprice: { type: Number, },
    MaxPrice: { type: Number, },
    Email: { type: String, },
    IsParking: { type: Boolean, },
}, { timestamps: true });

const Banquet: Model<IBanquet & Document> = models.Banquet || mongoose.model<IBanquet>('Banquet', BanquetSchema);

export default Banquet;