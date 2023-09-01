// import packages
import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

// import from other files
import Products from '@components/Products';
import { Product } from '@utils/types';

export default function Home() {
  const [data, setData] = useState<Product[]>([]);

  const fetchProductsData = async () => {
    return axios
      .get('https://thentwrk.s3.amazonaws.com/static/interview/demodata.json')
      .then(({ data: { products } }) => {
        console.log(products); // writes to the console what the data looks like from API call
        setData(products);
      });
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="font-bodyFont">
        <Products data={data} />
      </main>
    </>
  );
}
