import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div className="root">
      <Head>
        <title>LinkldinDMWriter - ChakiChaki</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>sup, insert your headline here</h1>
          </div>
          <div className="header-subtitle">
            <h2>insert your subtitle here</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
