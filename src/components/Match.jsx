import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { GameMode } from '../data/GameMode';
import { LobbyType } from '../data/LobbyType';
import { Heroes } from '../data/Heroes';
import { v4 as uuidv4 } from 'uuid';
const Match = ({ match, index }) => {
  const gameMode = GameMode[match.game_mode]['name']
    .replace('game_mode_', '')
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const lobbyType = LobbyType[match.lobby_type]['name']
    .replace('lobby_type_', '')
    .replace('mm', 'Matchmaking')
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const radiant_win = match.radiant_win ? 'text-radiantWin' : 'text-direWin';
  const percentage = Math.round(match.duration / 30);
  const width = percentage > 100 ? '100%' : `${percentage}%`;
  const backGroundColor = index % 2 === 0 ? 'bg-evenLine' : 'bg-oddLine';

  return (
    <Grid
      className={`flex flex-col items-center justify-center font-radiance ${backGroundColor} bg-opacity-60`}
    >
      {/* Match ID  */}
      <Grid item className="w-48 pl-2">
        <Link to={`/matches/${match.match_id}`}>
          <div className="text-matchId">{match.match_id}</div>
        </Link>
        <div className="text-white opacity-60 text-xs">
          {new Date(match.start_time * 1000).toLocaleString()}
        </div>
      </Grid>
      {/* Game Mode */}
      <Grid item className="w-48">
        <div className="font-medium">{gameMode}</div>
        <div className="text-white opacity-60 text-xs">{lobbyType}</div>
      </Grid>
      {/* Win and Loss */}
      <Grid item className="w-48">
        <div className={`font-medium ${radiant_win}`}>
          {match.radiant_win ? 'Radiant' : 'Dire'} Victory
        </div>
      </Grid>
      {/* Duration */}
      <Grid item className="w-36">
        <div className="font-medium">
          {Math.round(match.duration / 60) < 10 ? '0' : ''}
          {Math.round(match.duration / 60)}:{match.duration % 60}
          {match.duration % 60 < 10 ? '0' : ''}
        </div>
        <div className="flex flex-col items-left justify-center h-4 w-36">
          <div className="h-1.5 bg-white" style={{ width }}></div>
        </div>
      </Grid>
      {/* Heroes Radiant */}
      <Grid item>
        <div className="flex flex-row items-center justify-center  w-80 py-2">
          {match.radiant_team.split(',').map((hero) => {
            const currentHero = Heroes.find((h) => {
              return h.id === Number(hero);
            });
            return (
              <Link to={`/hero/${currentHero?.name_loc}`} key={uuidv4()}>
                <img
                  src={`https://api.opendota.com${currentHero?.img}`}
                  alt={currentHero?.name_loc}
                  className="h-8 w-12 mx-0.5"
                />
              </Link>
            );
          })}
        </div>
      </Grid>
      {/* Heroes Radiant */}
      <Grid item>
        <div className="flex flex-row items-center justify-center  w-80 py-2">
          {match.dire_team.split(',').map((hero) => {
            const currentHero = Heroes.find((h) => {
              return h.id === Number(hero);
            });
            return (
              <Link to={`/hero/${currentHero?.name_loc}`} key={uuidv4()}>
                <img
                  src={`https://api.opendota.com${currentHero?.img}`}
                  alt={currentHero?.name_loc}
                  className="h-8 w-12 mx-0.5"
                />
              </Link>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};

export default Match;
