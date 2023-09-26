import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export const RouteWithLayout: FC = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
