import { FC, MouseEventHandler, ReactNode } from "react";

import "./styles.sass";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

export const ModalContainer: FC<Props> = ({ children, onClose }) => {
    const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
        onClose();
    };

    return (
        <div className="blurContainer" onClick={(e) => handleClick(e)}>
            {children}
        </div>
    );
};
