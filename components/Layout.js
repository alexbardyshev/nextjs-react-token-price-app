import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title="Token prices" }) => {
    return (
        <div className="layout">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Token Prices Next App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="header">
                <Link href="/" passHref>
                    <a className="logo">
                        TOKEN PRICES
                    </a>
                </Link>
            </header>
            <main className="main">
                {children}
            </main>
        </div>
    );
}

export default Layout;
