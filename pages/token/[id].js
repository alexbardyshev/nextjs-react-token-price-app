import Layout   from "../../components/Layout/Layout";
import styles from './Coin.module.css';

const Token = ({ token }) => {
    return(
        <Layout>
            <div className={styles.token_page}>
                <div className={styles.token_container}>
                    <img
                        src={token.image.large}
                        alt={token.name}
                        className={styles.token_image}
                    />
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
            </div>
        </Layout>
    );
}

export default Token;

export async function getServerSideProps(context) {
    const { id } = context.query;

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

    const data = await res.json();

    return {
        props: {
            token: data
        }
    }
}
