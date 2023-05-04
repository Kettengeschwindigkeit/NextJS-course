import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import youtubeImg from "../public/youtube.png";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Titillium+Web:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    <Image src={youtubeImg} width={500} height={350} alt="preview" placeholder="blur" />
  </Layout>
);

export default MyApp;
