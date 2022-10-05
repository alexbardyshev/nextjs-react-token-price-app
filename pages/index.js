import Head from 'next/head'

import SearchBar from "../components/SerachBar/SearchBar";
import TokensList from "../components/TokensList";
import Layout from "../components/Layout";

export default function Home({ filteredTokens }) {
  return (
    <Layout>
      <div className="token_app">
          <SearchBar />
          <TokensList filteredTokens={filteredTokens} />
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');

    const filteredTokens = await res.json();

    return {
        props: { filteredTokens }
    }
}
