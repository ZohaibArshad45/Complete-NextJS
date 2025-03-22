import { NextResponse } from "next/server";

export const POST = () => {
    return NextResponse.json([{ id: 2, name: 'Zohaib', city: 'bwp' }]);
};