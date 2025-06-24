import { NextResponse } from "next/server";
import { local_employee } from "../../../localData/local-data";

export const GET = ()=>{
    const data = local_employee;
    return NextResponse.json(data, {status: 200})
}