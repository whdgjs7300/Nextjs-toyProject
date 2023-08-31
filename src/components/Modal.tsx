import Image from 'next/image'
import styles from '../CSS/Modal.module.css';

type ModalProps = {
    imageUrl: string | null,
    onClose: () => void,
};

export default function Modal({imageUrl, onClose} : ModalProps) {
    return (
        
        <div className={styles.modal_overlay} >
            <div className={styles.modal_close} onClick={onClose}>
                <span className={styles.close_button}>X</span>
            </div>
                <div className={styles.modal_content}>
                    {imageUrl !== null && (
                        <img className={styles.modal_image} src={imageUrl} alt="Modal" />
                    )}
                </div>
        </div>
        
    )
}