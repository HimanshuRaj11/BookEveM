import connectDB from "@/DB/ConnectDb";
import cloudinary from "@/lib/Cloudinary";
import Banquet from "@/Models/Banquet.model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        await connectDB();

        const { InputData } = await request.json()
        const { Name,
            Description,
            rating,
            contactNumber,
            WhatsappNumber,
            isVerified,
            Location,
            Minprice,
            MaxPrice,
            Email,
            IsParking } = InputData
        // const { Image } = await request.json()

        // const uploadResponse = await Promise.all(Image?.map((file: string) =>
        //     cloudinary.uploader.upload(file, {
        //         resource_type: "auto",
        //         folder: 'BookEveM-Banquets',
        //     })
        // ));

        const data = await Banquet.create({
            Name,
            Description,
            // Image,
            rating,
            contactNumber,
            WhatsappNumber,
            isVerified,
            Location,
            Minprice,
            MaxPrice,
            Email,
            IsParking,
        })

        return NextResponse.json({ message: "Data", data })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error as Error })
    }
}