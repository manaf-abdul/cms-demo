import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/generic/Layout";
import Home from "../pages/home";
import Login from "../pages/log-in";
import { ROUTES } from "./routes";
import EditFormVisibility from "../pages/admin/editFormFields";
import Forms from "../pages/admin/forms";
import Notfound from "../pages/not-found";
import SignUp from "../pages/signup";

const AppRoutes = () => {
    return (
        <Router>
            <Routes location={location} key={location.pathname}>
                <Route path={ROUTES.home} element={
                    <Layout><Home /> </Layout>} />
                <Route path={ROUTES.editFormVisbility} element={<Layout><EditFormVisibility /></Layout>} />
                <Route path={ROUTES.forms} element={<Layout><Forms /></Layout>} />
                <Route path={ROUTES.login} element={<Login />} />
                <Route path={ROUTES.signUp} element={<SignUp />} />
                <Route path={ROUTES.notfound} element={<Notfound />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
