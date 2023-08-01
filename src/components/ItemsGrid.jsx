import { Grid } from '@mui/material';
import { Items } from '../data/Items';
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { searchByItemName } from '../utils/filters';
import { v4 as uuidv4 } from 'uuid';

const ItemsGrid = () => {
  const inputValue = useSelector((state) => state.search.inputValue);
  const filteredItems = searchByItemName(Items, inputValue);
  return (
    <Grid container justifyContent="center">
      {filteredItems.map((item) => (
        <Grid key={uuidv4()} item>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemsGrid;
