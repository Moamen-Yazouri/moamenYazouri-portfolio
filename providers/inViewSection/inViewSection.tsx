"use client";
import { createContext, Dispatch, useState } from "react";

interface IContext {
    setInView: Dispatch<string>,
    inView: string,
}

interface IProps {
    children: React.ReactNode;
}
export const InViewContext = createContext<IContext>({
    setInView: () => { },
    inView: "home",
}) 

export const InViewProvider = (props: IProps) => {
    const [inView, setInView] = useState("#home");
    const value: IContext = {
        inView,
        setInView,
    } 
    return <InViewContext.Provider value={value}>
        {props.children}
    </InViewContext.Provider>
}