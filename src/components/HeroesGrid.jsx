import { Grid } from '@mui/material';
import HeroCard from './HeroCard';
import { Heroes } from '../data/Heroes';
import { useSelector } from 'react-redux';
import { searchByHeroName } from '../utils/filters';

const HeroesGrid = () => {
  const inputValue = useSelector((state) => state.search.inputValue);
  const filteredHeroes = searchByHeroName(Heroes, inputValue);

  return (
    <Grid container justifyContent="center">
      {filteredHeroes.map((hero) => (
        <Grid key={hero.id} item>
          <HeroCard hero={hero} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HeroesGrid;
