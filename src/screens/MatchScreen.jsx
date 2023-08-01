import React from 'react';
import Layout from '../UI/NavBar/Layout';
import MatchDetails from '../components/MatchDetails';
import { useParams } from 'react-router-dom';

const MatchScreen = () => {
    const { id } = useParams();
  return (
    <>
      <Layout>
        <div className="container mx-auto min-h-screen mt-16">
          <MatchDetails id={id}/>
        </div>
      </Layout>
    </>
  );
};

export default MatchScreen;
