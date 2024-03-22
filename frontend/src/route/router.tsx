import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/generic/Layout";
import Home from "../pages/home";
import Login from "../pages/log-in";
import { ROUTES } from "./routes";

const AppRoutes = () => {
    return (
        <Router>
            <Layout>
                <Routes location={location} key={location.pathname}>
                    <Route path={ROUTES.home} element={<Home />} />
                    <Route path={ROUTES.login} element={<Login />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRoutes;
