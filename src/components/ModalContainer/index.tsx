import { FC, ReactNode } from "react";

import "./styles.sass";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

export const ModalContainer: FC<Props> = ({ children, onClose }) => {
    return (
        <div className="blurContainer" onClick={onClose}>
            {children}
        </div>
    );
};
