
const formConfig = [{
    name: "Profile",
    fields: [
        {
            name: "email",
            label: "Email",
            type: "text",
            rules: {
                required: "Email address is required",
                pattern: {
                    value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                },
            },
            props: {
                variant: "outlined",
            },
            visibility: true
        },
        {
            name: "gender",
            label: "Gender",
            type: "select",
            rules: {
                required: "Gender is required",
            },
            options: [
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" }
            ],
            props: {
                variant: "outlined",
            },
            visibility: true
        },
        {
            name: "birthdate",
            label: "Date of Birth",
            type: "date",
            rules: {
                required: "Date of Birth is required",
            },
            props: {
                variant: "outlined",
            },
            visibility: false
        },
    ]
}, {
    name: "Education",
    fields: [
        {
            name: "Education",
            label: "Education",
            type: "text",
            rules: {
                required: "Email address is required",
                pattern: {
                    value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                },
            },
            props: {
                variant: "outlined",
            },
            visibility: true
        },
        {
            name: "gender",
            label: "Gender",
            type: "select",
            rules: {
                required: "Gender is required",
            },
            options: [
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" }
            ],
            props: {
                variant: "outlined",
            },
            visibility: true
        },
        {
            name: "birthdate",
            label: "Date of Birth",
            type: "date",
            rules: {
                required: "Date of Birth is required",
            },
            props: {
                variant: "outlined",
            },
            visibility: false
        },
    ]
},
{
    name: "Profession",
    fields: [
        {
            name: "Profession",
            label: "Profession",
            type: "text",
            rules: {
                required: "Email address is required",
                pattern: {
                    value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                },
            },
            props: {
                variant: "outlined",
            },
            visibility: true
        },
        {
            name: "gender",
            label: "Gender",
            type: "select",
            rules: {
                required: "Gender is required",
            },
            options: [
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" }
            ],
            props: {
                variant: "outlined",
            },
            visibility: true
        },
        {
            name: "birthdate",
            label: "Date of Birth",
            type: "date",
            rules: {
                required: "Date of Birth is required",
            },
            props: {
                variant: "outlined",
            },
            visibility: false
        },
    ]
},
{
    name: "Documnet",
    fields: [
        {
            name: "Documnet",
            label: "Documnet",
            type: "text",
            rules: {
                required: "Email address is required",
                pattern: {
                    value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                },
            },
            props: {
                variant: "outlined",
            },
            visibility: true
        },
        {
            name: "gender",
            label: "Gender",
            type: "select",
            rules: {
                required: "Gender is required",
            },
            options: [
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" }
            ],
            props: {
                variant: "outlined",
            },
            visibility: true
        },
        {
            name: "birthdate",
            label: "Date of Birth",
            type: "date",
            rules: {
                required: "Date of Birth is required",
            },
            props: {
                variant: "outlined",
            },
            visibility: false
        },
        // {
        //   name: "phone",
        //   label: "Phone",
        //   type: "tel",
        //   rules: {
        //     required: "Phone number is required",
        //   },
        //   props: {
        //     variant: "outlined",
        //   },
        // },
    ]
}
]

// const Home = () => {

//     return (
//           <Auth formConfig={formConfig} />
//     )
// }

// export default Home

import DynamicForm from '../form';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

// const steps = [
//     'Pofile',
//     'Education',
//     'Proffession',
//     'Document',
// ];
const stepsData = [{
    name: "Profile",
    _id: 1,
    step: 1
}, {
    name: "Education",
    _id: 2,
    step: 2
}, {
    name: "Proffession",
    _id: 3,
    step: 3
}, {
    name: "Document",
    _id: 4,
    step: 4
}]
const delay = (milliseconds: any) => {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
};


export default function Home() {
    const [steps, setSteps] = React.useState(stepsData)
    const [activeStep, setActiveStep] = React.useState(1)
    const [currentStepData, setCurrentStepData] = React.useState(formConfig[0])
    const [loading, setLoading] = React.useState(false)

    const nextStepHandler = async () => {
        try {
            setLoading(true)
            // throw new Error("error")
            await delay(3000).then(() => {
                const nextStep = stepsData.find(step => step.step === activeStep + 1);
                console.log(nextStep)
                if (nextStep) {
                    setCurrentStepData(formConfig[nextStep?.step])
                }
            });
            setActiveStep(prevActiveStep => {
                const nextStep = prevActiveStep + 1;
                return nextStep >= steps.length + 1 ? prevActiveStep : nextStep;
            });
        } catch (error) {

        } finally {
            setLoading(false)
        }
    };

    const previousStepHandler = async () => {
        try {
            setLoading(true)
            const nextStep = stepsData.find(step => step.step === activeStep - 1);
            if (nextStep) {
                setCurrentStepData(formConfig[nextStep?.step])
            }
            setActiveStep(prevActiveStep => Math.max(prevActiveStep - 1, 1));
        } catch (error) {

        } finally {
            setLoading(false)
        }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((steps) => (
                    <Step key={steps.name}>
                        <StepLabel>{steps.name}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <DynamicForm
                formConfig={currentStepData.fields}
                nextStepHandler={nextStepHandler}
                previosStepHandler={previousStepHandler}
                isLoading={loading}
            />
        </Box>
    );
}
