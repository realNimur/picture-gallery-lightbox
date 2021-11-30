import React, {FC, useEffect, useState} from 'react';
import PhotoItem from '../PhotoItem/PhotoItem';
import styles from './styles.module.scss'
import {IPhotoItem} from "../../types/types";
import axios from 'axios';
import Paginator from "../Paginator";

const PhotoList: FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [photos, setPhotos] = useState<IPhotoItem[]>([]);
    useEffect(() => {
        fetchPhotos();
    }, [])

    async function fetchPhotos() {
        try {
            const res = await axios.get<IPhotoItem[]>(`https://jsonplaceholder.typicode.com/photos?_limit=28`);
            setPhotos(res.data);
        } catch (e) {
            alert(e);
        }
    }


    return (
        <div className={styles["photo-list"]}>
            {photos.slice((currentPage - 1) * 9, currentPage * 9).map(photo => <PhotoItem
                thumbnailUrl={photo.thumbnailUrl} url={photo.url} title={photo.title}
                key={photo.id} />)}

            <Paginator setCurrentPage={setCurrentPage} totalCount={photos.length} />
        </div>
    );
};

export default PhotoList;