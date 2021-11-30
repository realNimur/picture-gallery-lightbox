import React, {FC} from 'react';
import styles from './styles.module.scss';

interface IPaginatorProps {
    totalCount: number;
    setCurrentPage: (page: number) => void;
}

const Paginator: FC<IPaginatorProps> = ({totalCount, setCurrentPage}) => {
    const pagesList = Array.from({length: Math.ceil(totalCount / 9)}, (v, k) => k + 1);
    return (
        <div className={styles.paginator}>
            {pagesList.map(item =>
                <button key={item} onClick={() => {
                    setCurrentPage(item)
                }}>{item}</button>
            )}
        </div>
    );
};

export default Paginator;