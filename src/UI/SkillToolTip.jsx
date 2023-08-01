import React from 'react';
import { useState } from 'react';

const SkillToolTip = ({ ability, name }) => {
  const [isMouseOnAbility, setIsMouseOnAbility] = useState(false);
  const handleMouseEnterSkill = () => {
    setIsMouseOnAbility(true);
  };

  const handleMouseLeaveSkill = () => {
    setIsMouseOnAbility(false);
  };

  return (
    <>
      <div className="relative">
        <img
          src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${ability.name}.png`}
          alt={ability.name}
          className="w-24 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
          onMouseEnter={handleMouseEnterSkill}
          onMouseLeave={handleMouseLeaveSkill}
        />
        {isMouseOnAbility && (
          <div
            className="absolute -top-8 transform -translate-y-full -left-32 pl-4 z-10  "
            onMouseEnter={handleMouseEnterSkill}
            onMouseLeave={handleMouseLeaveSkill}
          >
            <div className=" bg-gradient-to-br from-gray-600 to-gray-900 py-4 px-4 pb-35 rounded-xl w-80 h-1/2 text-sm ">
              <video
                className="w-80 h-1/2 opacity-100"
                autoPlay={true}
                preload="auto"
                loop
                playsInline
              >
                <source
                  src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${name}/${ability.name}.webm`}
                  type="video/webm"
                />
                <source
                  src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${name}/${ability.name}.mp4`}
                  type="video/mp4"
                />
              </video>
              <p className="pt-2 text-white font-serif text-2xl font-bold uppercase tracking-wide">
                {ability.name_loc}
              </p>
              <p className="text-gray-400 mt-3 text-base tracking-wide">
                {ability.desc_loc}
              </p>
            </div>
            <div className="absolute left-32 ">
              <div class="w-24 overflow-hidden inline-block">
                <div class=" h-10 w-10 ml-4 bg-gradient-to-br from-grayGradFrom to-grayGradTo -rotate-45 transform origin-top-left"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SkillToolTip;
