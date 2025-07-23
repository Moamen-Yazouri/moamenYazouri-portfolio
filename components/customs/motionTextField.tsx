"use client"
import type React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useField } from "formik";
import clsx from "clsx"
import type { IStyle } from "./types"


type CustomTextFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "name"> & {
    name: string
    label?: string
    style?: IStyle
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  label,
  style,
  ...rest
}) => {
    const [field, meta] = useField(name)

    return (
        <div className="space-y-2">
        {label && (
            <Label
            htmlFor={name}
            className={clsx(
                style?.label ??
                "text-sm font-semibold text-blue-300 tracking-wide",
            )}
            >
            {label}
            </Label>
        )}
        <div className="relative">
            
            <Input
                id={name}
                {...field}
                {...rest}
                type={"text"}
                className={clsx(
                style?.input ??
                    "w-full bg-slate-900/60 border-cyan-600/30 text-slate-200 placeholder:text-blue-300 focus:border-cyan-400 focus:ring-cyan-300/40 hover:border-cyan-500 transition-all duration-200",
                meta.touched && meta.error &&
                    "border-red-500 focus:border-red-500 focus:ring-red-500/50",
                )}
            />
        </div>

        {meta.touched && meta.error && (
            <p className="text-sm text-red-400 mt-1 bg-red-900/10 border border-red-600/30 rounded-md px-2 py-1">
            {meta.error}
            </p>
        )}
        </div>
  )
}

export default CustomTextField;
