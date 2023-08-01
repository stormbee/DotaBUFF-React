import React, { useEffect, useState } from 'react';
import { Items } from '../data/Items';
import { Heroes } from '../data/Heroes';
import { FaTrophy } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MatchDetailsTable = ({ match, isRadiant }) => {
  const players = isRadiant
    ? match.players.slice(0, 5)
    : match.players.slice(5);
  const [avatars, setAvatars] = useState({});

  useEffect(() => {
    async function fetchAvatars() {
      const avatarRequests = players.map((player) =>
        player.account_id
          ? axios.get(
              `https://api.opendota.com/api/players/${player.account_id}`
            )
          : null
      );
      const avatarResponses = await Promise.allSettled(avatarRequests);
      const avatarDict = {};
      avatarResponses.forEach((response, index) => {
        if (response.value !== null) {
          const avatarPath = response.value.data.profile?.avatar;
          avatarDict[players[index].account_id] = avatarPath;
        }
      });
      setAvatars(avatarDict);
    }
    fetchAvatars();
  }, [players]);

  const findAvatarHandle = (account_id) => avatars[account_id];

  const findImageHandle = (heroId) => {
    const hero = Heroes.find((hero) => hero.id === heroId);
    return hero ? hero.img : '';
  };
  const findNameHandle = (heroId) => {
    const hero = Heroes.find((hero) => hero.id === heroId);
    return hero ? hero.name_loc : '';
  };
  const findItemImageHandle = (itemId) => {
    const item = Items.find((item) => item.id === itemId);
    return item ? item.link : '';
  };
  const findItemNameHandle = (itemId) => {
    const item = Items.find((item) => item.id === itemId);
    return item ? item.name_loc : '';
  };
  const checkThousands = (number) => {
    if (number > 1000) {
      return `${(number / 1000).toFixed(1)}k`;
    } else if (number === 0) {
      return '-';
    }
    return number;
  };
  return (
    <div className="min-h-96 m-3 font-lucida text-sm">
      {isRadiant ? (
        <header className="text-start text-xl uppercase   pl-2 text-radiantWin">
          The Radiant
          {match.radiant_win ? (
            <FaTrophy className="inline-block  mb-2 ml-3 text-white" />
          ) : null}
        </header>
      ) : (
        <header className="text-start text-xl pl-2 uppercase  text-direWin">
          The Dire
          {!match.radiant_win ? (
            <FaTrophy className="inline-block  mb-2 ml-3 text-white" />
          ) : null}
        </header>
      )}
      <div className=" bg-itemTooltipGradTo p-2">
        <table className="table-fixed">
          <thead>
            <tr>
              <th className="px-2 py-1">Hero</th>
              <th className="px-2 py-1 w-64">Player</th>
              <th className="px-2 py-1 w-8"></th>
              <th className="px-2 py-1">K</th>
              <th className="px-2 py-1">D</th>
              <th className="px-2 py-1">A</th>
              <th className="px-4 py-1 text-golden">NET</th>
              <th className="px-2 py-1">LH</th>
              <th className="">/</th>
              <th className="px-2 py-1">DN</th>
              <th className="px-2 py-1">GPM</th>
              <th className="">/</th>
              <th className="px-2 py-1">XPM</th>
              <th className="px-4 py-1">DMG</th>
              <th className="px-2 py-1">HEAL</th>
              <th className="px-2 py-1">BLD</th>
              <th className="px-2 py-1 w-72">Items</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr
                key={uuidv4()}
                className={`text-center ${
                  isRadiant
                    ? index % 2 !== 0
                      ? 'bg-onDisplayEvenLineRadiant'
                      : 'bg-onDisplayOddLineRadiant'
                    : !isRadiant
                    ? index % 2 !== 0
                      ? 'bg-onDisplayEvenLineDire'
                      : 'bg-onDisplayOddLineDire'
                    : null
                } hover:bg-onDisplayLinesHover`}
              >
                <td className=" px-4 py-1">
                  <div className="relative">
                    <Link to={`/hero/${findNameHandle(player.hero_id)}`}>
                      <img
                        className="h-8 w-12"
                        src={`https://api.opendota.com${findImageHandle(
                          player.hero_id
                        )}`}
                        alt={findNameHandle(player.hero_id)}
                      />
                      <span className="absolute bg-black bg-opacity-50 text-xxs bottom-0 right-0 flex justify-end ">
                        {player.level}
                      </span>
                    </Link>
                  </div>
                </td>
                <td
                  className={`text-start text-xs ${
                    isRadiant ? 'text-radiantWin' : 'text-direWin'
                  }`}
                >
                  {player.personaname}
                </td>
                <td>
                  {player.account_id ? (
                    <a
                      href={`https://www.opendota.com/players/${player.account_id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="h-6 w-8"
                        src={findAvatarHandle(player.account_id)}
                        alt={player.personaname}
                      />
                    </a>
                  ) : null}
                </td>
                <td className="">{player.kills}</td>
                <td className=" text-center text-gray-400">{player.deaths}</td>
                <td className="">{player.assists}</td>
                <td className=" text-golden">
                  {checkThousands(player.net_worth)}
                </td>
                <td className=" text-end text-gray-400">
                  {checkThousands(player.last_hits)}
                </td>
                <td className=" text-gray-400">/</td>
                <td className=" text-start text-gray-400">
                  {checkThousands(player.denies)}
                </td>
                <td className=" text-end text-gray-400">
                  {checkThousands(player.gold_per_min)}
                </td>
                <td className=" text-gray-400">/</td>
                <td className=" text-start text-gray-400">
                  {checkThousands(player.xp_per_min)}
                </td>
                <td className=" text-gray-400">
                  {checkThousands(player.hero_damage)}
                </td>
                <td className=" text-gray-400">
                  {checkThousands(player.hero_healing)}
                </td>
                <td className=" text-gray-400">
                  {checkThousands(player.tower_damage)}
                </td>
                <td className=" px-2 py-1">
                  <div className="flex flex-row">
                    {player.item_0 !== 0 && (
                      <img
                        className="h-8 w-10 mx-0.5"
                        src={findItemImageHandle(player.item_0)}
                        alt={findItemNameHandle(player.item_0)}
                      />
                    )}
                    {player.item_1 !== 0 && (
                      <img
                        className="h-8 w-10 mx-0.5"
                        src={findItemImageHandle(player.item_1)}
                        alt={findItemNameHandle(player.item_1)}
                      />
                    )}
                    {player.item_2 !== 0 && (
                      <img
                        className="h-8 w-10 mx-0.5"
                        src={findItemImageHandle(player.item_2)}
                        alt={findItemNameHandle(player.item_2)}
                      />
                    )}
                    {player.item_3 !== 0 && (
                      <img
                        className="h-8 w-10 mx-0.5"
                        src={findItemImageHandle(player.item_3)}
                        alt={findItemNameHandle(player.item_3)}
                      />
                    )}
                    {player.item_4 !== 0 && (
                      <img
                        className="h-8 w-10 mx-0.5"
                        src={findItemImageHandle(player.item_4)}
                        alt={findItemNameHandle(player.item_4)}
                      />
                    )}
                    {player.item_5 !== 0 && (
                      <img
                        className="h-8 w-10 mx-0.5"
                        src={findItemImageHandle(player.item_5)}
                        alt={findItemNameHandle(player.item_5)}
                      />
                    )}
                  </div>
                </td>
                <td className=" px-2 py-1">
                  {player.item_neutral !== 0 ? (
                    <img
                      className="h-8 w-8 rounded-full"
                      src={findItemImageHandle(player.item_neutral)}
                      alt={findItemNameHandle(player.item_neutral)}
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 "></div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchDetailsTable;
