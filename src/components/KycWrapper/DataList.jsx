const formInputs = [
  {
    id: 1,
    title: "A. Personal Info",
    subTitles: [
      {
        id: 11,
        subHeading: "1. Name of the Applicant",
        fields: [
          {
            id: 111,
            label: "First Name",
            type: "text",
            name: "firstName",
            placeholder: "",
            required: true,
          },
          {
            id: 112,
            label: "Last Name",
            type: "text",
            name: "lastName",
            placeholder: "",
            required: true,
          },
        ],
      },
      {
        id: 12,
        subHeading: "2. Father's Name",
        fields: [
          {
            id: 121,
            label: "First Name",
            type: "text",
            name: "fatherFirstName",
            placeholder: "",
            required: true,
          },
          {
            id: 122,
            label: "Last Name",
            type: "text",
            name: "fatherLastName",
            placeholder: "",
            required: true,
          },
        ],
      },
      {
        id: 13,
        subHeading: "3. Gender",
        fields: [
          {
            id: 131,
            label: "Male",
            type: "radio",
            name: "gender",
            value: "male",
            checked: true,
          },
          {
            id: 132,
            label: "Female",
            type: "radio",
            name: "gender",
            value: "female",
          },
          {
            id: 133,
            label: "Others",
            type: "radio",
            name: "gender",
            value: "others",
          },
        ],
      },
      {
        id: 14,
        subHeading: "4. Marital Status",
        fields: [
          {
            id: 141,
            label: "Single",
            type: "radio",
            name: "marital",
            value: "single",
            checked: true,
          },
          {
            id: 142,
            label: "Married",
            type: "radio",
            name: "marital",
            value: "married",
          },
          {
            id: 143,
            label: "Divorced",
            type: "radio",
            name: "marital",
            value: "divorced",
          },
        ],
      },
      {
        id: 15,
        subHeading: "5. Date of Birth",
        fields: [
          {
            id: 151,
            label: "(MM/DD/YYYY)",
            type: "date",
            name: "dob",
            required: true,
          },
        ],
      },
      {
        id: 16,
        subHeading: "6. Occupation",
        fields: [
          {
            id: 161,
            label: "Applicant's Occupation",
            type: "select",
            name: "occupation",
            required: true,
            options: [
              {
                value: "",
                label: "--- Select your occupation ---",
                isDisabled: true,
              },
              {
                value: "business",
                label: "Business",
              },
              {
                value: "medical",
                label: "Medical",
              },
              {
                value: "teacher",
                label: "Teacher",
              },
              {
                value: "technology",
                label: "Technology",
              },
              {
                value: "freelancer",
                label: "Freelanceer / Self-Employed",
              },
              {
                value: "lawyer",
                label: "Lawyer",
              },
              {
                value: "tourism",
                label: "Tourism",
              },
              {
                value: "agriculture",
                label: "Agriculture",
              },
              {
                value: "banker",
                label: "Banker",
              },
              {
                value: "others",
                label: "Others",
              },
            ],
          },
        ],
      },
      {
        id: 17,
        subHeading: "7. Contact",
        fields: [
          {
            id: 171,
            label: "Contact Number",
            type: "text",
            name: "contactNumber",
            placeholder: "",
            required: true,
          },
          {
            id: 172,
            label: "Email Address",
            type: "email",
            name: "email",
            placeholder: "",
            required: true,
          },
        ],
      },
      {
        id: 18,
        subHeading: "8. Status",
        fields: [
          {
            id: 181,
            label: "Resident Individual",
            type: "radio",
            name: "status",
            value: "resident",
            checked: true,
          },
          {
            id: 182,
            label: "Non Resident",
            type: "radio",
            name: "status",
            value: "nonResident",
          },
          {
            id: 183,
            label: "Foreign National",
            type: "radio",
            name: "status",
            value: "foreign",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "B. Address Details",
    subTitles: [
      {
        id: 21,
        subHeading: "1. Applicant's Address",
        fields: [
          {
            id: 211,
            label: "Street Address",
            type: "text",
            name: "street",
            placeholder: "",
            required: true,
          },
          {
            id: 212,
            label: "City",
            type: "text",
            name: "city",
            placeholder: "",
            required: true,
          },
          {
            id: 213,
            label: "Country",
            type: "text",
            name: "country",
            placeholder: "",
            required: true,
          },
          {
            id: 214,
            label: "State/ Province",
            type: "text",
            name: "state",
            plaveholder: "",
            required: true,
          },
          {
            id: 215,
            label: "Zip Code",
            type: "text",
            name: "zipCode",
            placeholder: "",
            required: true,
          },
        ],
      },
      {
        id: 22,
        subHeading: "2. Proof of Address provided by Applicant",
        fields: [
          {
            id: 221,
            label: "Passport",
            type: "radio",
            name: "proof",
            value: "passport",
            checked: true
          },
          {
            id: 222,
            label: "Driving License",
            type: "radio",
            name: "proof",
            value: "drivingLicense",
          },
          {
            id: 223,
            label: "Citizenship",
            type: "radio",
            name: "proof",
            value: "telephoneBill",
          },
          {
            id: 224,
            label: "Ration Card",
            type: "radio",
            name: "proof",
            value: "ration",
          },
          {
            id: 225,
            label: "Voter Identity Card",
            type: "radio",
            name: "proof",
            value: "voterCard",
          },
          {
            id: 226,
            label: "Others",
            type: "radio",
            name: "proof",
            value: "others",
          },
        ],
      },
      {
        id: 23,
        subHeading: "3. File upload",
        fields: [
          {
            id: 231,
            label: "Please upload related photographs and documents",
            type: "file",
            name: "photo",
            accept: "image/png, image/gif, image/jpeg, image/svg, image/jpg",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "C. Declaration",
    subTitles: [
      {
        id: 31,
        subHeading: "",
        content: `I hereby declare that the information provided in this form is 
        accurate and complete. I confirm that any information is found incorrect and/or 
        incomplete that leads a violation of regulations may initiate legal actions, and 
        I accept that I am the responsible party for any and all charges, penalties 
        and violations.`,
        fields: [],
      },
      {
        id: 32,
        subHeading: "Name of the Applicant",
        fields: [
          {
            id: 321,
            label: "First Name",
            type: "text",
            name: "declareFirstName",
            placeholder: "",
            required: true,
          },
          {
            id: 322,
            label: "Last Name",
            type: "text",
            name: "declareLastName",
            placeholder: "",
            required: true,
          },
        ],
      },
      {
        id: 33,
        subHeading: "Date Submitted",
        fields: [
          {
            id: 331,
            label: "(MM/DD/YYYY)",
            type: "date",
            name: "signDate",
            required: true,
          },
        ],
      },
    ],
  },
];

const formValues = {
  firstName: "",
  lastName: "",
  fatherFirstName: "",
  fatherLastName: "",
  gender: "",
  marital: "",
  dob: "",
  occupation: "",
  contactNumber: "",
  email: "",
  status: "",
  street: "",
  city: "",
  country: "",
  state: "",
  zipCode: "",
  photo: "",
  declareFirsttName: "",
  declareLastName: "",
  signDate: "",
};

export { formInputs, formValues };
