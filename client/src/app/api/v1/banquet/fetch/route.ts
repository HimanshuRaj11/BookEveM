import Banquet from "@/Models/Banquet.model";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {

        const banquet = await Banquet.find()
        return NextResponse.json({ message: "", banquet, success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error as Error, error: true }, { status: 503 })
    }
}