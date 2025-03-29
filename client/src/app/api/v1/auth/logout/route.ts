import { VerifyUser } from "@/lib/VerifyUser";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const user_id = await VerifyUser();
        if (!user_id) {
            return NextResponse.json({ message: "Something went wrong", error: true })
        }
        const cookiesObj = await cookies();
        cookiesObj.delete("AuthToken")
        return NextResponse.json({ message: "Logout successful", success: true }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ message: error as Error, error: true })
    }
}