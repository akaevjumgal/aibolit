import React from "react";
import styles from "./Modal.module.css"

const Modal = ({ close, children }) => {
    return (
      <div className={styles.modal} onClick={close}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    )
}
export default Modal;