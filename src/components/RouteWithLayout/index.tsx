import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";

import "./styles.sass";

export const RouteWithLayout: FC = () => {
    return (
        <div className="layout">
            <Header />
            <Outlet />
        </div>
    );
};
