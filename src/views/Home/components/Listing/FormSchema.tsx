import * as Yup from 'yup'

const phoneRegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
const websiteRegExp = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/

export const FormSchema = Yup.object({
    project_name:   Yup.string().required("Project name is required"),
    description:    Yup.string().required("Description is required"),
    name:           Yup.string().required("Name is required"),
    email:          Yup.string().email().required("Email is required"),
    telegram:       Yup.string().required("Telegram is required"),
    website:        Yup.string().optional().matches(websiteRegExp, 'Website address is not valid'),
    phone:          Yup.string().optional().matches(phoneRegExp, 'Phone number is not valid'),
})