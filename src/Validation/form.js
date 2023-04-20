import * as yup from "yup";

const formSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  fatherFirstName: yup.string().required("First name is required"),
  fatherLastName: yup.string().required("First name is required"),
  gender: yup.string().required("Please select a gender"),
  marital: yup.string().required("Select your current marital status"),
  dob: yup.string().required("DOB is required"),
  occupation: yup.string().required("Ocupation is required"),
  contactNumber: yup.string().required("Contact number is required"),
  email: yup.string().email().required("Email is mandatory"),
  status: yup.string().required("Enter your status"),
  street: yup.string(),
  city: yup.string().required("Enter your city"),
  country: yup.string().required("Enter your country"),
  state: yup.string(),
  zipCode: yup.string(),
  photo: yup.string(),
  declareFirstName: yup.string().required("Please enter your first name"),
  declareLastName: yup.string().required("Please enter your last name"),
  signDate: yup.string().required("Signature Date is mandatory")
});

export default formSchema;