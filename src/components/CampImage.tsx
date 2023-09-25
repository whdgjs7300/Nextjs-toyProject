'use client'
import { useState } from 'react';
import styles from '../CSS/CampImage.module.css';
import Modal from './Modal';


type DataProps = {
    item : DetailImageData[],
    
} 

export default function CampImage({item} : DataProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };



return (

    <div className={styles.image_container}>
            <h2>캠핑장 이미지 보기</h2>
            <div className={styles.image_gallery}>
                {item?.map((image, i) => (
                    <div className={styles.image_item} key={i} onClick={() => openModal(image.imageUrl)}>
                        <img src={image.imageUrl} alt={`Image ${i}`} />
                        
                    </div>
                ))}
            </div>
            {selectedImage && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </div>
)
}
