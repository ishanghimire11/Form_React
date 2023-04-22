import * as yup from "yup";

const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[A-Za-z0-9]*$/, "no special characters")
    .required("First name is required"),

  lastName: yup
    .string()
    .matches(/^[A-Za-z0-9]*$/, "no special characters")
    .required("Last name is required"),

  fatherFirstName: yup
    .string()
    .matches(/^[A-Za-z0-9]*$/, "letters and number only")
    .required("First name is required"),

  fatherLastName: yup
    .string()
    .matches(/^[A-Za-z0-9]*$/, "letters and number only")
    .required("First name is required"),

  gender: yup.string().required("Please select a gender"),

  marital: yup.string().required("Select your current marital status"),

  dob: yup.string().required("DOB is required"),

  occupation: yup.string().required("Ocupation is required"),

  contactNumber: yup
    .string()
    .matches(
      /^[+]?[(]?[+]?\d{2,4}[)]?[-\s]?\d{2,8}[-\s]?\d{2,8}$/,
      "please enter a valid phone number"
    )
    .required("Contact number is required"),

  email: yup.string().email().required("Email is mandatory"),

  status: yup.string().required("Enter your status"),

  street: yup.string(),

  city: yup
    .string()
    .matches(/^[a-zA-Z]+$/, "Enter a valid city")
    .required("Enter your city"),

  country: yup
    .string()
    .matches(/^[a-zA-Z]+$/, "Enter a valid city")
    .required("Enter your country"),

  state: yup.string(),

  zipCode: yup.string().matches(/^[0-9]*$/, "zip code must be only numbers"),

  photo: yup.mixed(),

  declareFirstName: yup.string().required("Please enter your first name"),

  declareLastName: yup.string().required("Please enter your last name"),

  signDate: yup.string().required("Signature Date is mandatory"),
});

export default formSchema;
