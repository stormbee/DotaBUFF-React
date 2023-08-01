import { useState } from 'react';
import SkillToolTip from '../UI/SkillToolTip';

const Hero = ({ hero }) => {
  const name = hero.img.split('/')[6].split('.')[0];
  const [isFullHistoryOpen, setIsFullHistoryOpen] = useState(false);

  const toggleFullHistory = () => {
    setIsFullHistoryOpen(!isFullHistoryOpen);
  };
  return (
    <>
      <div className="w-full text-white flex flex-col overflow-hidden relative">
        <div className="flex flex-row justify-center items-center relative w-full h-full">
          {/* Biography */}
          <div className="w-full h-1/2  pr-48 ml-40 overflow-hidden relative ">
            <div className=" text-white pt-16 uppercase tracking-widest font-thin text-2xl">
              {hero.primary_attr}
            </div>
            <div className=" font-serif mt-2 leading-110 text-6xl font-bold uppercase tracking-widest">
              {hero.name_loc}
            </div>
            <div className="text-md font-bold uppercase tracking-widest text-blue-300 mt-5">
              {hero.npe_desc_loc}
            </div>
            <div>
              <div className="w-full mt-2  text-gray-300 font-light text-xl leading-tight">
                {isFullHistoryOpen ? (
                  <div className="w-full h-96 pr-12 overflow-y-auto relative text-base">
                    <style>
                      {
                        'div::-webkit-scrollbar { \
                      width: 6px;\
                      height: 6px;\
                    }\
                    div::-webkit-scrollbar-thumb { \
                      background-color: gray; \
                      border-radius: 6px;\
                    }\
                    div::-webkit-scrollbar-track {\
                      background-color: white; \
                    }'
                      }
                    </style>
                    {hero.bio_loc}
                    <div
                      className="text-blue-300 cursor-pointer font-thin text-sm hover:text-blue-400"
                      onClick={toggleFullHistory}
                    >
                      Close Full History
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-96  pr-24  overflow-hidden relative">
                    {hero.hype_loc}
                    <div
                      className="text-blue-300 cursor-pointer font-thin text-sm hover:text-blue-400"
                      onClick={toggleFullHistory}
                    >
                      Open Full History
                    </div>
                    <div className="mt-4 text-gray-600 uppercase font-bold tracking-wider text-sm">
                      Attack Type
                    </div>
                    <div className="flex-row items-center ">
                      <div className=" uppercase font-bold tracking-wider text-sm">
                        {hero.attack_type}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* webm */}
          <div className=" pr-36 pt-24 overflow-hidden relative">
            <video autoPlay loop preload="auto" playsInline muted>
              <source
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${name}.webm`}
                type="video/webm"
              />
              <img
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${name}.png`}
                alt={hero.name_loc}
              />
            </video>
          </div>
        </div>
        {/* Stats */}
        <div className="flex h-full">
          <div className="flex flex-col items-center w-200 ">
            <div className="grid grid-cols-2 ">
              <div className="grid-rows-3 gap-4">
                <img
                  src={`https://api.opendota.com${hero.img}`}
                  alt={hero.name_loc}
                  className="w-54"
                />
                <div className="h-1/8 flex grid-cols-2 bg-gradient-to-r from-hpLeft to-hpRight">
                  <div className="flex w-3/5 items-center justify-center  text-white text-shadow font-radiance font-extrabold text-lg ">
                    {hero.max_health}
                  </div>
                  <div className="flex w-2/5 items-center justify-center font-bold  text-xs text-hpReg">
                    +{hero.health_regen.toFixed(2)}
                  </div>
                </div>

                <div className="h-1/8 flex grid-cols-2 bg-gradient-to-r from-manaLeft to-manaRight">
                  <div className="flex w-3/5 items-center justify-center  text-white text-shadow font-radiance font-extrabold text-lg">
                    {hero.max_mana}
                  </div>
                  <div className="flex w-2/5 items-center justify-center  font-bold text-xs text-manaReg">
                    +{hero.mana_regen.toFixed(2)}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 grid-rows-3 justify-center items-center">
                <div class="justify-center items-center  text-center font-extrabold">
                  STR
                </div>
                <div class="justify-center items-center  text-right pr-3 text-xl font-bold">
                  {hero.str_base}
                </div>
                <div class="justify-center items-center  text-sm text-gray-300">
                  +{hero.str_gain}
                </div>
                <div class="justify-center items-center  text-center font-extrabold">
                  AGI
                </div>
                <div class="justify-center items-center  text-right pr-3 text-xl font-bold">
                  {hero.agi_base}
                </div>
                <div class="justify-center items-center  text-sm text-gray-300">
                  +{hero.agi_gain}
                </div>
                <div class="justify-center items-center  text-center font-extrabold">
                  INT
                </div>
                <div class="justify-center items-center  text-right pr-3 text-xl font-bold">
                  {hero.int_base}
                </div>
                <div class="justify-center items-center  text-sm text-gray-300">
                  +{hero.int_gain}
                </div>
              </div>
            </div>
            <div className="h-full ">
              <div className=" text-center font-bold text-gray-500 text-xl uppercase tracking-wider text-shadow-sm m-6">
                Attributes
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-0.5 border mx-8 my-10 border-gray-500 "></div>
          <div className="flex flex-col items-center w-200 ">
            <div className="w-full flex flex-row flex-wrap justify-between gap-4 items-center mb-16 ">
              {hero.abilities.map((ability) => {
                return (
                  !ability.ability_is_granted_by_scepter &&
                  !ability.ability_is_granted_by_shard && (
                    <SkillToolTip
                      key={ability.id}
                      ability={ability}
                      name={name}
                    />
                  )
                );
              })}
            </div>
            <div className="text-center font-bold text-gray-500 text-xl uppercase tracking-wider text-shadow-sm  mt-16 ">
              Skills
            </div>
          </div>
          <div className="flex flex-col items-center w-0.5 border mx-8 my-10 border-gray-500 "></div>
          <div className="flex flex-col items-center w-200">
            <div className="w-full h-2/3 flex flex-row flex-wrap justify-between ">
              <div className="w-1/3 h-full min-h-0 flex flex-col ">
                <div className=" text-center uppercase text-sm font-bold tracking-wide text-gray-500   ">
                  Attack
                </div>
                <div className="flex flex-row items-center justify-left pl-6  mt-3 text-md ">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png"
                    alt="attack range"
                    className="w-6 h-6 mr-1"
                  />
                  {hero.damage_min} - {hero.damage_max}
                </div>
                <div className="flex flex-row justify-left pl-6 mt-3 text-md ">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png"
                    alt="attack speed"
                    className="w-6 h-6 mr-1"
                  />
                  {hero.attack_rate}
                </div>
                <div className="flex flex-row justify-left pl-6 mt-3 text-md ">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png"
                    alt="attack range"
                    className="w-6 h-6 mr-1"
                  />
                  {hero.attack_range}
                </div>
                {hero.projectile_speed !== 0 && (
                  <div className="flex flex-row justify-left pl-6 mt-3 text-md ">
                    <img
                      src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png"
                      alt="attack range"
                      className="w-6 h-6 mr-3"
                    />
                    {hero.projectile_speed}
                  </div>
                )}
              </div>
              <div className="w-1/3 h-full min-h-0 flex flex-col ">
                <div className=" text-center uppercase text-sm font-bold tracking-wide text-gray-500  ">
                  Defense
                </div>
                <div className="flex flex-row justify-left pl-6  mt-3 text-md ">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png"
                    alt="attack range"
                    className="w-6 h-6 mr-3"
                  />
                  {hero.armor.toFixed(1)}
                </div>
                <div className="flex flex-row justify-left pl-6 mt-3 text-md ">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png"
                    alt="attack speed"
                    className="w-6 h-6 mr-3"
                  />
                  {hero.magic_resistance}%
                </div>
              </div>
              <div className="w-1/3 h-full min-h-0 flex flex-col ">
                <div className="text-center uppercase text-sm font-bold tracking-wide text-gray-500  ">
                  Mobility
                </div>
                <div className="flex flex-row justify-left pl-6  mt-3 text-md ">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png"
                    alt="attack range"
                    className="w-6 h-6 mr-3"
                  />
                  {hero.movement_speed}
                </div>
                <div className="flex flex-row justify-left pl-6 mt-3 text-md ">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_turn_rate.png"
                    alt="attack speed"
                    className="w-6 h-6 mr-3"
                  />
                  {hero.turn_rate}%
                </div>
                <div className="flex flex-row justify-left pl-6 mt-3 text-md ">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png"
                    alt="attack speed"
                    className="w-6 h-6 mr-3"
                  />
                  {hero.sight_range_day}/{hero.sight_range_night}
                </div>
              </div>
            </div>
            <div className=" text-center font-bold text-gray-500 text-xl uppercase tracking-wider text-shadow-sm mt-10 ">
              STATS
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
