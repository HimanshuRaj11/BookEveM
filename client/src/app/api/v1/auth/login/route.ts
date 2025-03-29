import connectDB from "@/DB/ConnectDb";
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
        await connectDB();

        const { InputData } = await request.json();
        const { email, password } = InputData;
        console.log(InputData);


        const Data = await UserModel.findOne({ email })
        if (!Data) {
            return NextResponse.json({ message: "Email not Register", error: true }, { status: 501 })
        }

        const verifyPassword = await bcrypt.compare(password, Data.password);
        if (!verifyPassword) {
            return NextResponse.json({ message: "Invalid Details", error: true }, { status: 501 })
        }

        const TokenData: ITokenData = {
            _id: Data._id
        }

        const Token = await jwt.sign(TokenData, process.env.TOKEN_SECRET as string)

        const response = NextResponse.json({ message: `Welcome back Mr.${Data.name}`, success: true, }, { status: 201 })
        response.cookies.set("AuthToken", Token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
        })
        return response;
    } catch (error) {
        return NextResponse.json({ message: error as Error, error: true }, { status: 503 })
    }
}