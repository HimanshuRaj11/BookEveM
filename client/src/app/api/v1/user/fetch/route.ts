import connectDB from "@/DB/ConnectDb";
import { VerifyUser } from "@/lib/VerifyUser";
import UserModel from "@/Models/User.model";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    try {
        await connectDB();
        const User_id = await VerifyUser();
        if (!User_id) {
            return NextResponse.json({ message: "Something went wrong", error: true })
        }
        const user = await UserModel.findById({ _id: User_id });

        return NextResponse.json({ message: "Fetched", success: true, user }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ message: error as Error, error: true }, { status: 503 })
    }
}