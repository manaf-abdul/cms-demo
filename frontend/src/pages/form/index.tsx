import { LoadingButton } from "@mui/lab";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { Controller, ControllerRenderProps, SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    [key: string]: string;
}

interface FormField {
    name: string;
    label: string;
    type: string;
    visibility: boolean;
    rules: Record<string, any>;
    options?: { value: string; label: string }[]; // For select options
    props?: Record<string, any>;
}

interface AuthProps {
    formConfig: FormField[];
    nextStepHandler: () => void;
    previosStepHandler: () => void;
    isLoading: boolean
}

const DynamicForm: React.FC<AuthProps> = ({ formConfig, nextStepHandler, previosStepHandler, isLoading }) => {
    const { control, handleSubmit, formState,reset } = useForm<IFormInput>({
        defaultValues:
            // storedState ? storedState :
            Object.fromEntries(formConfig.map(field => [field.name, ""]))
    });
    const { errors } = formState;

    const onSubmit: SubmitHandler<IFormInput> = async(data: any) => {
        console.log(data);
        nextStepHandler()
        reset()
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
                    rowGap={4}
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                >
                    {formConfig.map((fields, index) => (
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
                    <Box display={"flex"}>
                        <LoadingButton
                            onClick={backhandler}
                            variant="contained"
                            size="large"
                            fullWidth
                            disableElevation
                        >
                            Back
                        </LoadingButton>
                        <LoadingButton
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            disableElevation
                            loading={isLoading}
                        >
                            Proceed
                        </LoadingButton>
                    </Box>

                </Box>
            </form>
        </Box>
    );
};

export default DynamicForm;
