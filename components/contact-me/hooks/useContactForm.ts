"use client";
import { useFormik } from "formik"
import { IFormValues } from "./types"
import { INITIAL_VALUES } from "./constants"
import { validationSchema } from "./validaitionSchema"
import { IMessage } from "@/@types"
import { toast } from "sonner"
import { submitMessage } from "../service/submitMessage.service";

export const useContactForm = () => {
    const handleSubmit = (
        values: IFormValues,
        setSubmitting: (submitting: boolean) => void,
        resetForm: () => void
    ) => {
        const formated: IMessage = {
            email: values.email,
            name: values.name,
            message: values.message,
        };
        submitMessage(formated)
        .then((data) => {
            if(typeof data === "string") {
                toast.error(data);
            }
            else {
                console.log(data)
                toast.success("Message sent successfully!");
            }
        })
        .catch(() => {
            toast.error("Something went wrong!");
        })
        .finally(() => {
            setSubmitting(false);
            resetForm();
        });
    }

    const formik = useFormik<IFormValues>({
        initialValues: INITIAL_VALUES,
        validationSchema: validationSchema,
        validateOnBlur: false,
        onSubmit: ((
            values,
            {
                setSubmitting,
                resetForm
            }
        ) => {
            handleSubmit(values, setSubmitting, resetForm);
        })
    });
    return {
        formik
    }    
}