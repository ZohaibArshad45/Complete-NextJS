import { NextResponse } from "next/server";
import { local_employee } from "../../../../localData/local-data";

export const GET = async (req, { params }) => {
    const id = parseInt(params.id); // 🟡 string ko number me convert
    const empdata = local_employee.find(emp => emp.id === id); // 🟢 id match karo

    // if (!empdata) {
    //     return NextResponse.json({ error: "Employee not found" }, { status: 404 });
    // }
    // return NextResponse.json(empdata, { status: 200 });

    let result = !empdata? ({ result :'NOT Employee found'}) : ({result : empdata})
    return NextResponse.json(result);
};

