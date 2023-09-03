import React, { FC } from 'react';
import styles from './select.module.css';

interface Props {
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectComponent: FC<Props> = ({ handleChange }) => {
    return (
        <div className={styles.selectContainer}>
            <select name="order" id="order" onChange={handleChange} className={styles.select}>
                <option value="default">Order: Relevance</option>
                <option value="asc">Low price</option>
                <option value="desc">High price</option>
            </select>
        </div>
    );
};

export default SelectComponent;
