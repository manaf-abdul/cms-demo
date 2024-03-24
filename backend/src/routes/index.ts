import express from "express";

import PingRoutes from "./pingRoutes";
import AppRoutes from "./appRoutes";
import AuthRoutes from "./authRoutes";
import FormRoutes from "./formRoutes";
import UserRoutes from "./userRoutes";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/ping",
    route: PingRoutes,
  },
  {
    path: "/app",
    route: AppRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/form",
    route: FormRoutes,
  },
  {
    path: "/user",
    route: UserRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
