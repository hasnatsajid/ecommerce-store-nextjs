import Head from 'next/head';

import { useEffect } from 'react';

import Layout from '../components/UI/Layout';
import Featured from '../components/UI/Featured';
import Categories from '../components/UI/Categories';

import categories from '../data/categories';
import items from '../data/items';

export default function Home() {
  const categoriesData = categories.data;
  const itemsData = items.data;

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categoriesData));
    localStorage.setItem('items', JSON.stringify(itemsData));
  }, []);

  return (
    <div className="app">
      <Head>
        <title>Ecommerce Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Featured />
        <Categories categories={categoriesData} />
      </Layout>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/categories');
//   const categories = await res.json();

//   return {
//     props: { categories },
//   };
// }
