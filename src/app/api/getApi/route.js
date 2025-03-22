import { NextResponse } from "next/server";
import { employee } from "@/db/db"

export const GET = ()=>{
    const data = employee;
    return NextResponse.json(data, {status: 200})
}