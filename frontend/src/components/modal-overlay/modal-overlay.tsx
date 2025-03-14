import React, { FC, ReactNode } from "react";

import Style from "./modal-overlay.module.css";

interface IOverlayProps {
  onClose: () => void;
  children: ReactNode;
}
export const ModalOverlay: FC<IOverlayProps> = ({ onClose, children }) => {
  return (
    <div className={Style.back}>
      <div className={Style.shadow} onClick={onClose}/>
      {children}
    </div>
  );
};