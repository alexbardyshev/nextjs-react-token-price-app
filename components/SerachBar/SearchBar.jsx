import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ( { ...rest } ) => {
    return (
        <div className={styles.token_search}>
            <input type='text' placeholder='Search' className={styles.token_input} />
        </div>
    );
}

export default SearchBar;
