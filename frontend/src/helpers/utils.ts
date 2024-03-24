const formConfig = [
  {
    _id: "65ff52f33abbd1da2a4ba53f",
    formName: "Profile",
    formFields: [
      {
        name: "dob",
        label: "Date of Birth",
        type: "date",
        rules: {
          required: "Date of Birth is required",
        },
        props: {
          variant: "outlined",
        },
        visibility: true,
        _id: "65ff52f33abbd1da2a4ba540",
      },
      {
        name: "gender",
        label: "Gender",
        type: "select",
        rules: {
          required: "Gender is required",
        },
        props: {
          variant: "outlined",
        },
        options: [
          {
            value: "male",
            label: "Male",
          },
          {
            value: "female",
            label: "Female",
          },
          {
            value: "other",
            label: "Other",
          },
        ],
        visibility: true,
        _id: "65ff52f33abbd1da2a4ba541",
      },
      {
        name: "phoneNo",
        label: "Phone Number",
        type: "tel",
        rules: {
          required: "Phone Number is required",
        },
        props: {
          variant: "outlined",
        },
        visibility: true,
        _id: "65ff52f33abbd1da2a4ba542",
      },
      {
        name: "city",
        label: "City",
        type: "text",
        rules: {
          required: "City is required",
        },
        props: {
          variant: "outlined",
        },
        visibility: true,
        _id: "65ff52f33abbd1da2a4ba543",
      },
      {
        name: "country",
        label: "Country",
        type: "text",
        rules: {
          required: "Country is required",
        },
        props: {
          variant: "outlined",
        },
        visibility: true,
        _id: "65ff52f33abbd1da2a4ba544",
      },
    ],
    createdAt: "2024-03-23T22:08:51.490Z",
    updatedAt: "2024-03-24T08:20:34.413Z",
    __v: 0,
  },
  {
    _id: "65ff53a53abbd1da2a4ba546",
    formName: "Education",
    formFields: [
      {
        name: "highschool",
        label: "High School Name",
        type: "text",
        rules: {
          required: "High School Name is required",
        },
        props: {
          variant: "outlined",
        },
        visibility: true,
        _id: "65ff53a53abbd1da2a4ba547",
      },
      {
        name: "higherSecondary",
        label: "Higher Secondary",
        type: "text",
        rules: {
          required: "Higher Secondary School is required",
        },
        props: {
          variant: "outlined",
        },
        visibility: true,
        _id: "65ff53a53abbd1da2a4ba548",
      },
      {
        name: "college",
        label: "College",
        type: "text",
        rules: {
          required: "College is required",
        },
        props: {
          variant: "outlined",
        },
        visibility: true,
        _id: "65ff53a53abbd1da2a4ba549",
      },
    ],
    createdAt: "2024-03-23T22:11:49.856Z",
    updatedAt: "2024-03-24T08:20:54.012Z",
    __v: 0,
  },
  {
    _id: "65ff55173abbd1da2a4ba54b",
    formName: "Profession",
    formFields: [
      {
        name: "professionCategory",
        label: "Profession Category",
        type: "text",
        rules: {
          required: "Profession Category is required",
        },
        props: {
          variant: "outlined",
        },
        visibility: true,
        _id: "65ff55173abbd1da2a4ba54c",
      },
      {
        name: "totalYearOfExerience",
        label: "Total Year Of Exerience",
        type: "text",
        rules: {
          required: "Year of Expeirence is required",
        },
        props: {
          variant: "outlined",
        },
        visibility: true,
        _id: "65ff55173abbd1da2a4ba54d",
      },
      {
        name: "currentCompany",
        label: "Current Company",
        type: "text",
        rules: {
          required: "Current Company is required",
        },
        props: {
          variant: "outlined",
        },
        visibility: true,
        _id: "65ff55173abbd1da2a4ba54e",
      },
      {
        name: "isHandicapped",
        label: "HandiCapped",
        type: "radio",
        rules: {
          required: "This field is required",
        },
        props: {
          variant: "outlined",
        },
        options: [
          {
            value: true,
            label: "Yes",
          },
          {
            value: false,
            label: "No",
          },
        ],
        visibility: true,
        _id: "65ff55173abbd1da2a4ba54f",
      },
    ],
    createdAt: "2024-03-23T22:17:59.122Z",
    updatedAt: "2024-03-24T08:20:44.745Z",
    __v: 0,
  },
  {
    _id: "65ff55a53abbd1da2a4ba551",
    formName: "Documents",
    formFields: [
      {
        name: "aadhar",
        label: "Aadhar",
        type: "file",
        rules: {
          required: "Aadhar is required",
        },
        props: {
          variant: "outlined",
        },
        visibility: true,
        _id: "65ff55a53abbd1da2a4ba552",
      },
      {
        name: "license",
        label: "License",
        type: "file",
        rules: {
          required: "License is required",
        },
        props: {
          variant: "outlined",
        },
        visibility: true,
        _id: "65ff55a53abbd1da2a4ba553",
      },
      {
        name: "panCard",
        label: "Pan Card",
        type: "file",
        rules: {
          required: "Pan Card is required",
        },
        props: {
          variant: "outlined",
        },
        visibility: true,
        _id: "65ff55a53abbd1da2a4ba554",
      },
    ],
    createdAt: "2024-03-23T22:20:21.707Z",
    updatedAt: "2024-03-23T22:20:21.707Z",
    __v: 0,
  },
];
