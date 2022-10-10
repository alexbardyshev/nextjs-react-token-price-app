import React from 'react';
import styles from './Tokens.module.css';
import Link from "next/link";

export function Tokens( { name, price, symbol, marketcap, volume, image, priceChange, id } ) {
    return (
        <Link href='/token/[id]' as={`/coins/${id}`}>
            <a>
                <div className={styles.token__container}>
                    <div className={styles.token__row}>
                        <div className={styles.token}>
                            <img src={image} className={styles.token__img} alt={name} />
                            <h1 className={styles.token__h1}>{name}</h1>
                            <p className={styles.token__symbol}>{symbol}</p>
                        </div>
                        <div className={styles.token__data}>
                            <p className={styles.token__price}>${price}</p>
                            <p className={styles.token__volume}>${volume.toLocaleString()}</p>
                            {priceChange < 0 ? (
                                <p className={(styles.token__percent, styles.red)}>{priceChange.toFixed(2)}%</p>
                            ) : (
                                <p className={(styles.token__percent, styles.green)}>{priceChange.toFixed(2)}%</p>
                            )}
                            <p className={styles.token__marketcap}>
                                Mkt Cap: ${marketcap.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}

