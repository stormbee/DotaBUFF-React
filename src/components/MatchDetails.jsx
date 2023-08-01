import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchMatchData,
  selectSelectedMatch,
  selectIsLoading,
  selectIsError,
} from '../store/matchesSlice';
import MatchDetailsTable from './MatchDetailsTable';

const MatchDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const match = useSelector(selectSelectedMatch);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const radiantWin = match?.radiant_win ? 'text-radiantWin' : 'text-direWin';
  useEffect(() => {
    dispatch(fetchMatchData(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div className="block">Loading...</div>;
  }

  if (isError) {
    return <div className="block">Error fetching match data</div>;
  }
  return (
    <div>
      {match ? (
        <div className="flex flex-col items-center justify-center border">
          {/* <div className="flex flex-col items-center justify-center min-h-96 mx-2 border "> */}
          <div
            className={`text-2xl font-extrabold ${radiantWin}  text-center uppercase`}
          >
            {match.radiant_win ? 'Radiant Victory' : 'Dire Victory'}
          </div>
          <div className="items-center text-xl py-3 font-lucida">
            <span className={`w-10 text-right font-bold  text-radiantWin`}>
              {match.radiant_score}
            </span>
            <span className="text-sm text-center mx-4">
              {Math.floor(match.duration / 60) < 10 ? '0' : ''}
              {Math.floor(match.duration / 60)}:
              {match.duration % 60 < 10 ? '0' : ''}
              {match.duration % 60}
            </span>
            <span className="w-10 text-left font-bold  text-direWin">
              {match.dire_score}
            </span>
          </div>
          <MatchDetailsTable match={match} isRadiant={true} />
          <MatchDetailsTable match={match} isRadiant={false} />

          {/* </div> */}
        </div>
      ) : (
        <div>Match not exist</div>
      )}
    </div>
  );
};

export default MatchDetails;
