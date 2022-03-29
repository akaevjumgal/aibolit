import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './ModalForOrders.module.css';

const CloseStyle = {
  position: 'absolute',
  fontSize: 15,
  color: 'var(--light-brown)',
  right: '20%',
  top: '17%',
  cursor: 'pointer',
};

export default function ModalForOrders({ close, children }) {
  return (
    <div className={styles.OrderModal} onClick={close}>

      <div className={styles.OrderModalContent} onClick={(e) => e.stopPropagation()}>
        <CloseIcon sx={CloseStyle} onClick={close} />
        {children}
      </div>
    </div>
  );
}
