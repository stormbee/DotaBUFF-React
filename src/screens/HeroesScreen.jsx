import React from 'react';
import HeroesGrid from '../components/HeroesGrid';
import Layout from '../UI/NavBar/Layout';

const HeroesScreen = () => {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen mt-16">
        <HeroesGrid />
      </div>
    </Layout>
  );
};

export default HeroesScreen;
