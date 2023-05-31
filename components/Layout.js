import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " | ShopO" : "ShopO"}</title>
        <meta name="description" content="ShopO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header>Header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
};

export default Layout;
