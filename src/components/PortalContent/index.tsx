import { FC, ReactNode } from "react";

import "./styles.sass";

interface Props {
    children: ReactNode;
}

export const PortalContent: FC<Props> = ({ children }) => {
    return (
        <div
            className="portal-content"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            {children}
        </div>
    );
};
