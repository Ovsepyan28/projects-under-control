import { FC } from "react";

import { NavLink } from "react-router-dom";

import "./styles.sass";

export const Header: FC = () => {
    return (
        <div className="header">
            <NavLink end className="buttonProjects" to="/">
                Выбор проекта
            </NavLink>
        </div>
    );
};
