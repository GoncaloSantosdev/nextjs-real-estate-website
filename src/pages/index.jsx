import Head from 'next/head';
// Components
import { Ads, FeaturedProperties, Hero, MeetTheTeam, Testemonials } from '../components';
import DefaultLayout from '../layouts/DefaultLayout';
// API CALL
import { getProperties } from '../api/getProperties';

export default function Home({ featuredProperties }) {
  console.log(featuredProperties);

  return (
    <>
      <Head>
        <title>Real Estate Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <DefaultLayout>
        <Hero />
        <FeaturedProperties featuredProperties={featuredProperties}/>
        <MeetTheTeam />
        <Ads />
        <Testemonials />
      </DefaultLayout>
      
    </>
  )
};

export const getStaticProps = async () => {
  const properties = await getProperties(6);
  // const { hits } = require('../features/data/properties');

  return{
    props: { featuredProperties: properties }
      // featuredProperties: hits.slice(0, 6), 
  }
};