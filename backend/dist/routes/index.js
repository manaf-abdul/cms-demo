"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pingRoutes_1 = __importDefault(require("./pingRoutes"));
const appRoutes_1 = __importDefault(require("./appRoutes"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const formRoutes_1 = __importDefault(require("./formRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const router = express_1.default.Router();
const defaultRoutes = [
    {
        path: "/ping",
        route: pingRoutes_1.default,
    },
    {
        path: "/app",
        route: appRoutes_1.default,
    },
    {
        path: "/auth",
        route: authRoutes_1.default,
    },
    {
        path: "/form",
        route: formRoutes_1.default,
    },
    {
        path: "/user",
        route: userRoutes_1.default,
    },
];
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
//# sourceMappingURL=index.js.map