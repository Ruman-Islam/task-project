import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " | ShopO" : "ShopO"}</title>
        <meta name="description" content="ShopO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div>
        <Navbar/>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
