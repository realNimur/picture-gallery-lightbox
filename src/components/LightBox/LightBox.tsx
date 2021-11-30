import React, {FC, useState} from 'react';
import styles from './styles.module.scss';
import Loader from "../Loader";

interface ILightboxProps {
    url: string;
    isVisibleLightbox: boolean;
    setVisibleLightBox: (value: boolean) => void;
    like: boolean;
    setLike: (value: boolean) => void;
}

const LightBox: FC<ILightboxProps> = ({url, isVisibleLightbox, setVisibleLightBox, like, setLike}: ILightboxProps) => {
    const [isImageLoad, setImageLoad] = useState<boolean>(false);
    return (
        isVisibleLightbox ? (
            <div className={styles.lightbox} onClick={() => {
                setImageLoad(false);
                setVisibleLightBox(false);
            }}>
                <div className={styles["lightbox-content"]} onClick={(e) => e.stopPropagation()}>
                    <div className={styles["lightbox-content__image-wrapper"]}>
                        {!isImageLoad && <Loader />}
                        <img
                            className={styles["lightbox-content__image"]}
                            src={url}
                            alt={'full_photo'}
                            onLoad={() => {
                                setImageLoad(true)
                            }}
                        />
                        <button
                            className={styles["lightbox-content__likes"]}
                            onClick={() => {
                                setLike(!like)
                            }}
                        >
                            <span className={like ? styles["lightbox-content__likes_red"] : ''}>&#x2764;</span>
                            LIKE
                        </button>
                    </div>
                    <div className={styles["lightbox-comments"]}>
                        <textarea className={styles["lightbox-comments__text"]}
                                  placeholder={'Напишите здесь свой комментарий'} />
                        <button className={styles["lightbox-comments__submit"]}>Оставить комментарий</button>
                    </div>
                </div>
            </div>
        ) : null
    );
};

export default LightBox;