import React from 'react';
import { useParams } from 'react-router-dom';
import { Heroes } from '../data/Heroes.js';
import Layout from '../UI/NavBar/Layout';
import Hero from '../components/Hero';
const HeroScreen = () => {
  const { id } = useParams();
  const hero = Heroes.find((hero) => hero.name_loc === id);
  return (
    <>
      <Layout>
        <div className="container mx-auto min-h-screen mt-16">
          <Hero hero={hero} />
        </div>
      </Layout>
    </>
  );
};

export default HeroScreen;
