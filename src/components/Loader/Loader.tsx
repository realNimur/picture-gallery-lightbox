import React, {FC} from 'react';
import styles from './styles.module.scss';

const Loader: FC = () => {
    return (
        <div className={styles["loader"]}>
            <div className={styles["loader__ring"]}></div>
            <p>Loading...</p>
        </div>
    );
};

export default Loader;