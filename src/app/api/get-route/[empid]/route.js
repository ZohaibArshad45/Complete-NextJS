import { NextResponse } from "next/server";
import { employee } from "@/db/db";

export const GET = (req, { params }) => {
    const empId = parseInt(params.empid); // Convert to number
    const empData = employee.filter((item) => (
        item.id === empId
    ));

    // if (empData.length === 0) {
    //     return NextResponse.json({ result: "No Employee Found" }, { status: 404 }); // Return 404 if not found
    // }
    // return NextResponse.json({ result: empData });

    let result = empData.length === 0 ? ({ result :'NOT Employee found'}) : ({result : empData})

    return NextResponse.json(result);
};
