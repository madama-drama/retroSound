import React, { FC, ReactNode } from "react";
import ReactDOM from "react-dom";

import { CloseIcon } from "@/images/closeIcon";

import { ModalOverlay } from "../modal-overlay/modal-overlay";

import Style from "./modal.module.css";

const modalsRoot = document.getElementById("react-modals")!;

interface IModalProps {
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<IModalProps> = ({ onClose, children }) => {
  React.useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <section className={Style.modalBlock}>
        <div className={Style.s}>
          <button className={Style.closeButton} onClick={onClose}>
            <CloseIcon />
          </button>
          {children}
        </div>
      </section>
    </ModalOverlay>,
    modalsRoot,
  );
};
