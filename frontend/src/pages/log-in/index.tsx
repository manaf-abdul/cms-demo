import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "../../route/routes";
import { setUser } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { userLogin } from "../../services/userService";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

interface IFormInput {
    email: string;
    password: string;
}
const Login = () => {
    const { control, handleSubmit, formState } = useForm<IFormInput>({
        defaultValues: {
            password: "",
            email:""
        },
    });
    const { errors } = formState;
    const { accessToken } = useSelector((state: RootState) => state.user);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // Check if access token exists
        if (accessToken) {
            // Redirect to login page
            navigate(generatePath(ROUTES.home));
        }
    }, [accessToken, navigate]);

    const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
        try {
            setLoading(true)
            const r = await userLogin(data)
            console.log("r",r)
            dispatch(setUser(r))
            navigate(generatePath(ROUTES.home))
        } catch (error: any) {
            console.log(error,"55")
            enqueueSnackbar(error.errorText, { variant: "error" });
        } finally {
            setLoading(false)
        }
    };

    const navigateHandler = () => {
        navigate(generatePath(ROUTES.signUp))
    }

    return (
        <div className="flex w-screen flex-wrap text-slate-800">
            <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2">
                <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
                    <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
                        New Feature
                    </span>
                    <p className="my-6 text-3xl font-semibold leading-10">
                        Create animations with{" "}
                        <span className="mx-auto block w-56 whitespace-nowrap rounded-lg bg-orange-400 py-2 text-white">
                            drag and drop
                        </span>
                    </p>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
                        necessitatibus nostrum repellendus ab totam.
                    </p>
                    <a
                        href="#"
                        className="font-semibold tracking-wide text-white underline underline-offset-4"
                    >
                        Learn More
                    </a>
                </div>
            </div>
            <div className="flex w-full flex-col md:w-1/2">
                <div className="flex justify-center pt-12 md:justify-start md:pl-12">
                    <a href="#" className="text-2xl font-bold text-blue-600">
                        {" "}
                        AutoVert .{" "}
                    </a>
                </div>
                <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
                    <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
                        Login
                    </p>
                    <p className="mt-6 text-center font-medium md:text-left" onClick={navigateHandler}>
                        Don't have an account?
                        <a
                            href="#"
                            className="whitespace-nowrap font-semibold text-blue-700"
                        >
                            SignUp here
                        </a>
                    </p>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col items-stretch pt-3 md:pt-8"
                    >
                        {/* <form > */}
                        <div className="flex flex-col pt-4">
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: "Email address is required",
                                    pattern: {
                                        value:
                                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Please enter a valid email",
                                    },
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        placeholder="Enter your email"
                                        label="Email"
                                        type="text"
                                        variant="outlined"
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                        className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                    />
                                )}
                            />
                        </div>
                        <div className="mb-4 flex flex-col pt-4">
                            <Controller
                                name="password"
                                control={control}
                                rules={{ required: "Password is required", minLength: 5 }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        placeholder="Enter your Password"
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        error={!!errors.password}
                                        helperText={errors.password?.message}
                                        className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                    />
                                )}
                            />
                        </div>
                        <LoadingButton
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            loading={loading}
                            disableElevation
                            className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
                        >
                            Sign in
                        </LoadingButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
