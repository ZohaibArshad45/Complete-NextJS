import { connectDB } from "@/database/mongodb";
import { NextResponse } from "next/server";
import { EmployeeModel } from "@/models/employee";

export const GET = async () => {
    try {
        await connectDB(); // Ensures connection before query
        const empdata = await EmployeeModel.find().exec();
        return NextResponse.json({ result: empdata }, { status: 200 });
    } catch (error) {
        console.error("❌ Error fetching employees:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};
