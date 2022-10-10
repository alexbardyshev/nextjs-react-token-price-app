import Layout   from "../../components/Layout";
import React from 'react';
import './Coin.module.css';

const Token = ({token}) => {
    return(
        <Layout>
            <div className={styles.token_page}>
                <div className={styles.token_container}>
                    <img
                        src={token.image.large}
                        alt={token.name}
                        className={styles.token_image}
                    />
                </div>
                <h1 className={styles.token_name}>
                    {token.name}
                </h1>
                <p className={styles.token_ticker}>
                    {token.symbol}
                </p>
                <p className={styles.token_current}>
                    {token.market_data.current_price.usd}
                </p>
            </div>
        </Layout>
    );
}

export default Token;
