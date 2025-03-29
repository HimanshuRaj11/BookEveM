import { IUser } from "@/Models/User.model";
import connectDB from "@/DB/ConnectDb";
import cloudinary from "@/lib/Cloudinary";
import UserModel from "@/Models/User.model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

interface ITokenData {
    _id: mongoose.Schema.Types.ObjectId;
}
export async function POST(request: Request) {
    try {
        const salt = await bcrypt.genSalt(10);
        await connectDB();

        const { InputData } = await request.json();
        const { name, email, phone, password } = InputData;

        const Email = await UserModel.findOne({ email })
        if (Email) {
            return NextResponse.json({ message: "Email Already Register", error: true }, { status: 501 })
        }

        const hash = await bcrypt.hash(password, salt);

        // const uploadResponse = await cloudinary.uploader.upload(image, {
        //     resource_type: "image",
        //     folder: "BookEveM-ProfilePic"
        // })


        const res: IUser = await UserModel.create({
            name,
            email,
            phone,
            password: hash,
        })
        const TokenData: ITokenData = {
            _id: res._id
        }

        const Token = await jwt.sign(TokenData, process.env.TOKEN_SECRET as string)

        const response = NextResponse.json({ message: "Account Created SuccessFul", res, success: true, }, { status: 201 })
        response.cookies.set("AuthToken", Token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24 * 365
        })
        return response;
    } catch (error) {
        return NextResponse.json({ message: error as Error, error: true }, { status: 503 })
    }
}