import { useFormik } from "formik"
import { IFormValues } from "./types"
import { INITIAL_VALUES } from "./constants"
import { validationSchema } from "./validaitionSchema"

export const useContactForm = () => {
    const handleSubmit = (
        values: IFormValues,
        setSubmitting: (submitting: boolean) => void,
        resetForm: () => void
    ) => {
        console.log(values);
        setTimeout(() => {
            setSubmitting(false);
            resetForm();
        }, 3000)
    }

    const formik = useFormik<IFormValues>({
        initialValues: INITIAL_VALUES,
        validationSchema: validationSchema,
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