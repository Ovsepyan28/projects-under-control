import { FC, ReactNode } from "react";

import "./styles.sass";

interface Props {
    children: ReactNode;
    maxWidth?: number;
}

export const PortalContent: FC<Props> = ({ children, maxWidth = 350 }) => {
    return (
        <div
            className="portal-content"
            onClick={(e) => {
                e.stopPropagation();
            }}
            style={{ maxWidth: `${maxWidth}px` }}
        >
            {children}
        </div>
    );
};
