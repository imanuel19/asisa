import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="themeColor" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
