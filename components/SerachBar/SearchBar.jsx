import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ( { onChange } ) => {
    return (
        <div className={styles.token_search}>
            <input
                type='text'
                placeholder='Search'
                className={styles.token_input}
                onChange={onChange}
            />
        </div>
    );
}

export default SearchBar;
