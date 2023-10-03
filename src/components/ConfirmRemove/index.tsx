import { FC } from "react";
import { createPortal } from "react-dom";

import { ModalContainer } from "../ModalContainer";
import { PortalContent } from "../PortalContent";

import "./styles.sass";

interface Props {
    onClose: () => void;
    onRemove: () => void;
}

export const ConfirmRemove: FC<Props> = ({ onClose, onRemove }) => {
    return createPortal(
        <ModalContainer onClose={onClose}>
            <PortalContent>
                <div className="confirm">
                    <h2 className="confirm-title">Подтверждение удаления</h2>
                    <div className="confirm-buttons">
                        <button className="confirm-cancel" onClick={onClose}>
                            Cancel
                        </button>
                        <button className="confirm-delete" onClick={onRemove}>
                            Delete
                        </button>
                    </div>
                </div>
            </PortalContent>
        </ModalContainer>,
        document.getElementById("modalContainer") || document.body
    );
};
