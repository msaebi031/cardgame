import Head from 'next/head'
import App from '../src/container/App';
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from 'aos';
// eslint-disable-next-line
import "swiper/css/bundle";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>
      <Head>
        <title>ربات حکم و ربات شلم | passoversnightmare</title>
        <meta charset="UTF-8" />
        <meta name="description" content="بازی های تلگرام ، ربات حکم تلگرام و ربات شلم تلگرام" />
        <meta name="keywords" content="ربات حکم , ربات شلم , ربات بازی تلگرام" />
        <meta name="author" content="Target Designer" />
        <meta
          name="description"
          content="معرفی ربات پاسور حکم و پاسور شلم"
          key="desc"
        />
        <meta name="google-site-verification" content="R6oBLxMecn9hl4Hp3Yep5Iw8bDT5XOQarAJ6RBp4-KA" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <App />
    </div>
  )
};
