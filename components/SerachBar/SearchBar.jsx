import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ( { type, placeholder,onChange } ) => {
    return (
        <div className={styles.token_search}>
            <input
                type={type}
                placeholder={placeholder}
                className={styles.token_input}
                onChange={onChange}
            />
        </div>
    );
}

export default SearchBar;
