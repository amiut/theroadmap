import Head from "next/head";
import { FC } from "react";
import Header from '@components/header';
import Hero from '@components/hero';
import Roadmaps from "@components/roadmaps";

const HomePage: FC = () => {
  return (
    <>
      <Head>
        <title>نقشه راه یادگیری برنامه نویسی</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="content" className="site-content">
        <Header />
        <Hero />
        <Roadmaps />
      </main>
    </>
  );
};

export default HomePage;
