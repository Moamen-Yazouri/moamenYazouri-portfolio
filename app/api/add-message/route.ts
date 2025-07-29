import { connection } from "@/DB/connection";
import messageService from "@/module/services/message.service";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) =>  {
    await connection();
    try {
        const data = await req.json();
        const newData = await messageService.addMessage(data);
        return NextResponse.json(
            {
                newData: newData,
            },
            {status: 201}
        )
    }
    catch(e) {
        if(e instanceof Error) {
            return NextResponse.json(
                {
                    error: "Failed to submit your message!"
                },
                {status: 401}
            )
        }
        return NextResponse.json(
            {
                error: "something went wrong!"
            },
            {status: 500}
        )  
        
    }
}