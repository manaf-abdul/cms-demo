import { Box, Button, CircularProgress, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, TextField } from "@mui/material";
import { Controller, ControllerRenderProps, SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    [key: string]: string;
}

// interface FormField {
//     name: string;
//     label: string;
//     type: string;
//     visibility: boolean;
//     rules: Record<string, any>;
//     options?: { value: string; label: string }[]; // For select options
//     props?: Record<string, any>;
// }

interface AuthProps {
    formConfig: any;
    nextStepHandler: () => void;
    previosStepHandler: () => void;
    isLoading: boolean
}

const DynamicForm: React.FC<AuthProps> = ({ formConfig, nextStepHandler, previosStepHandler, isLoading }) => {
    const defaultValues = Object.fromEntries(
        formConfig.formFields
            .filter((field: any) => field.visibility) // Filter based on visibility
            .map((field: any) => [field.name, ""])
    );

    const { control, handleSubmit, formState, reset } = useForm<IFormInput>({
        defaultValues: defaultValues

        // storedState ? storedState :
    });
    const { errors } = formState;

    const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
        console.log(data);
        nextStepHandler()
        // reset()
    };

    const backhandler = () => {
        previosStepHandler()
    }

    const renderField = (field: { type: string, options?: { value: string; label: string }[] } & ControllerRenderProps<IFormInput, string>): JSX.Element => {
        switch (field.type) {
            case "text":
                return (
                    <TextField
                        {...field}
                        fullWidth
                        placeholder={`Enter your ${field.name.toLowerCase()}`}
                        label={field.name}
                        variant="outlined"
                        error={!!errors[field.name]}
                        helperText={errors[field.name]?.message}
                    />
                );
            case "select":
                return (
                    <TextField
                        select
                        {...field}
                        fullWidth
                        label={field.name}
                        variant="outlined"
                        error={!!errors[field.name]}
                        helperText={errors[field.name]?.message}
                    >
                        {field.options?.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                );
            case "date":
                return (
                    <TextField
                        {...field}
                        fullWidth
                        label={field.name}
                        type="date"
                        variant="outlined"
                        error={!!errors[field.name]}
                        helperText={errors[field.name]?.message}
                    />
                );
            case "radio":
                return (
                    <>
                        <FormLabel>{field.name}</FormLabel>
                        <RadioGroup {...field}>
                            {field.options?.map(option => (
                                <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio />}
                                    label={option.label}
                                />
                            ))}
                        </RadioGroup>
                    </>
                );
            case "file":
                return (
                    <TextField
                        {...field}
                        fullWidth
                        label={field.name}
                        type="file"
                        variant="outlined"
                        error={!!errors[field.name]}
                        helperText={errors[field.name]?.message}
                    />
                );
            case "tel":
                return (
                    <TextField
                        {...field}
                        fullWidth
                        label={field.name}
                        type="tel"
                        variant="outlined"
                        error={!!errors[field.name]}
                        helperText={errors[field.name]?.message}
                    />
                );
            default:
                throw new Error(`Invalid field type: ${field.type}`);
        }
    };


    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    padding={4}
                    columnGap={4}
                    marginTop={5}
                    marginBottom={2}
                    rowGap={4}
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                >
                    {formConfig.formFields.map((fields: any, index: any) => (
                        fields.visibility && ( // Only render if visibility is true
                            <Box key={index} width="100%">
                                <Controller
                                    name={fields.name}
                                    control={control}
                                    rules={fields.rules}
                                    render={({ field }) => renderField({ ...field, type: fields.type, options: fields.options })}
                                />
                            </Box>
                        )
                    ))}
                    <Box display="flex" alignItems="center" justifyContent="space-evenly" sx={{ width: "100%", padding: 2 }}>
                        <Button
                            onClick={backhandler}
                            variant="contained"
                            // color="primary"
                            size="large"
                            fullWidth
                            disableElevation
                        >
                            Back
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            disableElevation
                            disabled={isLoading}
                        >
                            {isLoading ? <CircularProgress></CircularProgress> : "Proceed"}
                        </Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
};

export default DynamicForm;
