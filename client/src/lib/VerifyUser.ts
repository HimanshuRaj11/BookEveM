import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

interface IDecodeToken {
    _id: string;
    key: string;
}

export const VerifyUser = async (): Promise<string | NextResponse> => {
    try {

        const CookieObj = await cookies()
        const token = CookieObj.get("AuthToken")?.value;
        if (!token) {
            return NextResponse.json({ message: "Something went wrong!", error: true }, { status: 401 });
        }
        const decodeToken = await jwt.verify(token, process.env.TOKEN_SECRET as string) as IDecodeToken;
        if (!decodeToken) {
            return NextResponse.json({ message: "Something went wrong!", error: true }, { status: 401 });
        }
        return decodeToken._id
    } catch (error) {
        return NextResponse.json({ error })
    }
}