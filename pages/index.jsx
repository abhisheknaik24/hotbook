import Category from '@/components/category/Categories';
import ItemsList from '@/components/items/Items';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Hotbook</title>
        <meta name='description' content='Hotbook' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Category />
      <ItemsList />
    </>
  );
};

export default Home;
