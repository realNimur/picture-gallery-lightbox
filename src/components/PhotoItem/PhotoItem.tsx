import React, {FC, useState} from 'react';
import styles from './styles.module.scss';
import LightBox from "../LightBox";
import {IPhotoItem} from "../../types/types";

const PhotoItem: FC<IPhotoItem> = ({thumbnailUrl, url, title}) => {
    const [like, setLike] = useState<boolean>(false);
    const [isVisibleLightbox, setVisibleLightbox] = useState<boolean>(false);

    const handleClickBox = () => {
        setVisibleLightbox(true);
    }
    const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setLike(!like);
    }
    return (
        <>
            <div className={styles["photo-item"]} onClick={handleClickBox}>
                <img src={thumbnailUrl} alt={title} />
                <p>{title}</p>
                <button className={styles["photo-item__like"]} onClick={(e) => handleLike(e)}>
                    <span className={like ? styles["photo-item__like_red"] : ''}>&#x2764;</span>
                    LIKE
                </button>
            </div>
            <LightBox like={like} setLike={setLike} url={url} isVisibleLightbox={isVisibleLightbox}
                      setVisibleLightBox={setVisibleLightbox} />
        </>
    );
};

export default PhotoItem;