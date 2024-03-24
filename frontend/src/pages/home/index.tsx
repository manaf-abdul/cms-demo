import DynamicForm from './components/DynamicForm';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useEffect, useState } from 'react';
import { getUserForms } from '../../services/userService';
import { enqueueSnackbar } from 'notistack';

export default function Home() {
    const [formData, setFormData] = useState([])
    const [activeStep, setActiveStep] = useState(0)
    const [currentStepData, setCurrentStepData] = useState<any>({})
    const [loading, setLoading] = useState(false)

    const nextStepHandler = async () => {
        try {
            setLoading(true)
            const nextStep = formData.findIndex((elm: any) => currentStepData._id === elm._id) + 1
            console.log(nextStep)
            if(!(nextStep>formData.length-1)){
                console.log("inside")
                setCurrentStepData(formData[nextStep])
            }
            setActiveStep(prevActiveStep => {
                const nextStep = prevActiveStep + 1;
                return nextStep >= formData.length + 1 ? prevActiveStep : nextStep;
            });
        } catch (error) {

        } finally {
            setLoading(false)
        }
    };

    const previousStepHandler = async () => {
        try {
            setLoading(true)
            const nextStep = formData.findIndex((elm: any) => currentStepData._id === elm._id) - 1
            console.log(nextStep)
            if(!(nextStep<0)){
                console.log("inside")
                setCurrentStepData(formData[nextStep])
            }
            // setCurrentStepData(formData[nextStep])
            setActiveStep(prevActiveStep => Math.max(prevActiveStep - 1, 0));
        } catch (error) {

        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            setLoading(true)
            const data = await getUserForms()
            setFormData(data)
            setCurrentStepData(data[0])
        } catch (error: any) {
            enqueueSnackbar(error.message ?? "Error Occured! Please refresh or try again later", { variant: "error" });
        } finally {
            setLoading(false)
        }
    }

    return (
        <Box sx={{ width: '100%'}}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {formData.map((steps: any) => (
                    <Step key={steps.formName}>
                        <StepLabel>{steps.formName}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {currentStepData?.formName && <DynamicForm
                formConfig={currentStepData}
                nextStepHandler={nextStepHandler}
                previosStepHandler={previousStepHandler}
                isLoading={loading}
            />}

        </Box>
    );
}
