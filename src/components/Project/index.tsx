import { FC } from "react";

import { Board } from "../Board";

import { initial } from "../../initialData";

import "./styles.sass";

export const Project: FC = () => {
    return (
        <div className="project">
            <Board state={initial} />
        </div>
    );
};
