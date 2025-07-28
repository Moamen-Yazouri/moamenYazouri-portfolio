import { IDbFormat } from "@/@types";

export const formater = <T, P extends Omit<T, keyof Exclude<IDbFormat, "_id">>, >(data: T[]): P[] => {
    const excludedKeys = [
        "createdAt",
        "updatedAt",
        "__v"
    ];
    const formated = data.map((d) => {
        const formatedObject = {} as P;
        for(const key in d) {
            if(!excludedKeys.includes(key) && key !== "_id") {
                (formatedObject as any)[key] = d[key]; 
            }
            else if (key === "_id") {
                (formatedObject as any)[key] = String(d[key]); 
            }
        }
        return formatedObject;
    });
    return formated;
}