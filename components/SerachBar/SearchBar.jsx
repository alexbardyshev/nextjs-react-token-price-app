import React from 'react';
import styles from './SearchBar.module.css';
import { useSelector, useDispatch } from "react-redux";
import {decrement, increment, onChangeSelect, selectValue, setEur, setGbp, setUsd} from "../../store/currencySlice";


const SearchBar = ( { type, placeholder,onChange } ) => {
    const currency = useSelector(selectValue);
    const dispatch = useDispatch()

    return (
        <>
            <h1>Currency is {currency.toUpperCase()}</h1>
            <div className={styles.token_search}>
                <input
                    type={type}
                    placeholder={placeholder}
                    className={styles.token_input}
                    onChange={onChange}
                />
            </div>
            <div>
                <select onChange= {(e) => dispatch(onChangeSelect(e.target.value))} className={styles.token_select}>
                    <option value="usd" selected>USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                </select>
            </div>
        </>
    );
}

export default SearchBar;
