import { FC } from "react";
import { createPortal } from "react-dom";

import { ModalContainer } from "../ModalContainer";
import { PortalContent } from "../PortalContent";

import "./styles.sass";

interface Props {
    onClose: () => void;
}

export const FullTask: FC<Props> = ({ onClose }) => {
    return createPortal(
        <ModalContainer onClose={onClose}>
            <PortalContent>Задача</PortalContent>
        </ModalContainer>,
        document.getElementById("modalContainer") || document.body
    );
};
