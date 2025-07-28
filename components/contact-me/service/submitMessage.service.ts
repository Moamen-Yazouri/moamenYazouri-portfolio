import { IMessage } from "@/@types";

export const submitMessage = async(message: IMessage) => {
    const baseUrl = process.env.PUBLIC_URL || "";
    try {
        const res = await fetch(`${baseUrl}/api/add-message`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),  
        });
        const data = await res.json();
        if(!res.ok) {
            const {error}: {error: string} = data;
            return error; 
        }
        const {newData}: {newData: IMessage} = data;
        return newData; 
    } 
    catch(e) {
        if(e instanceof Error) {
            return e.message;
        }
        return "Something went wrong!";
    }

}