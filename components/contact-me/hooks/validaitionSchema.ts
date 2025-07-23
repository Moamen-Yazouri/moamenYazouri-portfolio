import * as yup from "yup";

export const validationSchema = yup.object({
    email: yup.string().email("Invalid email!").required("Email is required!"),
    name: yup.string().required("Please provide your name!"),
    message: yup.string().required("Please provide a message to send!"),
})