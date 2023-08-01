import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchParsedMatches,
  selectMatches,
  selectIsLoading,
  selectIsError,
} from '../store/matchesSlice';
import Match from './Match';
import { v4 as uuidv4 } from 'uuid';

const MatchesGrid = () => {
  const dispatch = useDispatch();
  const matches = useSelector(selectMatches);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchParsedMatches());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center ">
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error occurred while fetching data.</div>}
      {
        <>
          <Grid
            container
            justifyContent="center"
            className="pt-10 font-bold text-md font-radiance"
          >
            <Grid item className="w-48 pl-2">
              <div>Match ID</div>
            </Grid>
            <Grid item className="w-48">
              <div>Game Mode</div>
            </Grid>
            <Grid item className="w-48">
              <div>Result</div>
            </Grid>
            <Grid item className="w-36">
              <div>Duration</div>
            </Grid>
            <Grid item className="w-80 pl-8 text-radiantWin">
              <div>Radiant Team</div>
            </Grid>
            <Grid item className="w-80 pl-8 text-direWin">
              <div>Dire Team</div>
            </Grid>
          </Grid>
          {matches.map((match, index) => (
            <Match key={uuidv4()} match={match} index={index} />
          ))}
        </>
      }
    </div>
  );
};

export default MatchesGrid;
