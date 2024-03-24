import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Layout from "../components/generic/Layout";
import Home from "../pages/home";
import Login from "../pages/log-in";
import { ROUTES } from "./routes";
import Notfound from "../pages/not-found";
import SignUp from "../pages/signup";
import SuccessPage from "../pages/success";
import GenericLoader from "../components/generic/GenericLoader";

const Forms = lazy(() => import('../pages/admin/forms'));
const EditFormVisibility = lazy(() => import('../pages/admin/editFormFields'));

const AppRoutes = () => {
    return (
        <Router>
            <Routes location={location} key={location.pathname}>
                <Route path={ROUTES.home} element={
                    <Layout><Home /> </Layout>} />
                <Route path={ROUTES.forms} element={
                    <Suspense fallback={<GenericLoader />}>
                        <Layout><Forms /></Layout>
                    </Suspense>
                } />
                <Route path={ROUTES.editFormVisbility} element={
                    <Suspense fallback={<GenericLoader />}>
                        <Layout><EditFormVisibility /></Layout>
                    </Suspense>
                } /><Route path={ROUTES.success} element={<Layout><SuccessPage /></Layout>} />
                <Route path={ROUTES.login} element={<Login />} />
                <Route path={ROUTES.signUp} element={<SignUp />} />
                <Route path={ROUTES.notfound} element={<Notfound />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
