import React from 'react';
import ItemsGrid from '../components/ItemsGrid';
import Layout from '../UI/NavBar/Layout';

const ItemsScreen = () => {
  return (
    <>
      <Layout>
        <div className="container mx-auto min-h-screen mt-16">
          <ItemsGrid />
        </div>
      </Layout>
    </>
  );
};

export default ItemsScreen;
