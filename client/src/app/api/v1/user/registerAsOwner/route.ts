import { VerifyUser } from "@/lib/VerifyUser";
import UserModel from "@/Models/User.model";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    try {
        const User_id = await VerifyUser();
        if (!User_id) {
            return NextResponse.json({ message: "Please Login", error: true }, { status: 500 })
        }
        await UserModel.findByIdAndUpdate({ _id: User_id }, {
            isOwner: true
        });

        return NextResponse.json({ message: "Account register as Owner, Please add Your place", success: true }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ message: error as Error, error: true }, { status: 500 })
    }
}