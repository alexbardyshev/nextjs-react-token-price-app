import {Tokens} from './Tokens';

export default function CoinList({ filteredTokens }) {
    return (
        <>
            {filteredTokens.map(token => {
                return (
                    <Tokens
                        key={token.id}
                        name={token.name}
                        id={token.id}
                        price={token.current_price}
                        symbol={token.symbol}
                        marketcap={token.total_volume}
                        volume={token.market_cap}
                        image={token.image}
                        priceChange={token.price_change_percentage_24h}
                    />
                );
            })}
        </>
    );
}
