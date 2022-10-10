import {useEffect, useState} from "react";
import SearchBar from "../components/SerachBar/SearchBar";
import TokensList from "../components/TokensList";
import Layout from "../components/Layout";

export default function Home({ filteredTokens }) {
    const [search, setSearch] = useState('');
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }


    const allTokens = filteredTokens.filter((token) => {
        return token.name.toLowerCase().includes(search.toLowerCase());
    });

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase());
    };

    return (
    <Layout>
      <div className="token_app">
          <SearchBar
              type='text'
              placeholder='Search Token'
              onChange={handleSearch}
          />
          <TokensList filteredTokens={allTokens} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false');

    const filteredTokens = await res.json();

    return {
        props: { filteredTokens }
    }
}
