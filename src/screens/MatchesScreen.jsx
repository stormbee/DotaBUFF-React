import MatchesGrid from '../components/MatchesGrid';
import Layout from '../UI/NavBar/Layout';

const MatchesScreen = () => {
  return (
    <>
      <Layout>
        <div className="container mx-auto min-h-screen mt-16">
          <MatchesGrid />
        </div>
      </Layout>
    </>
  );
};

export default MatchesScreen;
