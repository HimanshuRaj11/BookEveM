import connectDB from "@/DB/ConnectDb";
import cloudinary from "@/lib/Cloudinary";
import { VerifyUser } from "@/lib/VerifyUser";
import Banquet from "@/Models/Banquet.model";
import UserModel from "@/Models/User.model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        await connectDB();
        const User_id = await VerifyUser();
        if (!User_id) {
            return NextResponse.json({ message: "Please Login", error: true }, { status: 500 })
        }

        const { InputData, Files } = await request.json()
        const { Name,
            Description,
            rating,
            contactNumber,
            MinPrice,
            MaxPrice,
            State,
            City,
            PinCode,
            Landmark,
        } = InputData


        const uploadResponse = await Promise.all(Files?.map((file: string) =>
            cloudinary.uploader.upload(file, {
                resource_type: "auto",
                folder: 'BookEveM/Banquets',
            })
        ));

        await Banquet.create({
            Owner: User_id,
            Name,
            Description,
            Image: uploadResponse,
            rating,
            contactNumber,
            State,
            City,
            PinCode,
            Landmark,
            MinPrice,
            MaxPrice,
        }).then(async (data) => {
            await UserModel.findOneAndUpdate({ _id: User_id }, {
                $push: { banquets: data._id }
            })
        })


        return NextResponse.json({ message: "Your Banquet Added Successful", success: true }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: error as Error, error: true }, { status: 503 })
    }
}