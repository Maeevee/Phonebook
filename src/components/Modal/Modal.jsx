import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css'


const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    const coseModal = evt => {
      if (evt.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', coseModal);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', coseModal);
      document.body.style.overflow = '';
    };
  }, [toggleModal]);

  const closeOnClick = evt => {
    if (evt.target === evt.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={styles.styled} onClick={closeOnClick}>
      <div className={styles.styledScnd}>
        {children}
        <button className={styles.styledButton} type="button" onClick={toggleModal}>
            X
        </button>
      </div>
    </div>,

    modalRoot
  );
};