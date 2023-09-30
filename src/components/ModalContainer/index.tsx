import { FC, ReactNode } from "react";

import "./styles.sass";

interface Props {
    children: ReactNode;
}

export const ModalContainer: FC<Props> = ({ children }) => {
    return <div className="modalContainer">{children}</div>;
};
