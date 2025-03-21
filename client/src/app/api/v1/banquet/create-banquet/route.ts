import connectDB from "@/DB/ConnectDb";
import cloudinary from "@/lib/Cloudinary";
import Banquet from "@/Models/Banquet.model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        await connectDB();

        const { Inputdata, Files } = await request.json()
        const { Name,
            Description,
            rating,
            contactNumber,
            MinPrice,
            MaxPrice,
            State,
            City,
            Pincode,
            Landmark,
        } = Inputdata

        const uploadResponse = await Promise.all(Files?.map((file: string) =>
            cloudinary.uploader.upload(file, {
                resource_type: "auto",
                folder: 'BookEveM-Banquets',
            })
        ));

        const data = await Banquet.create({
            Name,
            Description,
            Image: uploadResponse,
            rating,
            contactNumber,
            State,
            City,
            Pincode,
            Landmark,
            MinPrice,
            MaxPrice,
        })

        return NextResponse.json({ message: "Your Banquet Added Successfull", success: true }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: error as Error, error: true }, { status: 503 })
    }
}