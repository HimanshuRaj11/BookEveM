import Banquet from "@/Models/Banquet.model";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: Promise<{ _id: string }> }) {
    try {
        const id = (await params)._id

        if (!id) {
            return NextResponse.json({ message: "ID is required", success: false }, { status: 400 });
        }

        const banquet = await Banquet.findById(id);
        if (!banquet) {
            return NextResponse.json({ message: "Banquet not found", success: false }, { status: 404 });
        }

        return NextResponse.json({ message: "", banquet, success: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error as Error, error: true }, { status: 503 });
    }
}