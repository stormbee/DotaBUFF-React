import { useState } from 'react';
import { Link } from 'react-router-dom';
const HeroCard = ({ hero }) => {
  const { name_loc, primary_attr, attack_type, roles, img } = hero;
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };
  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/hero/${name_loc}`}>
        <img
          src={`https://api.opendota.com${img}`}
          alt={name_loc}
          width="256"
          height="144"
        />
        {showPopup && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
            <h2 className="text-lg font-bold">{name_loc}</h2>
            <ul className="text-sm">
              <li>Primary Attribute: {primary_attr}</li>
              <li>Attack Type: {attack_type}</li>
              <li>Roles: {roles.join(', ')}</li>
            </ul>
          </div>
        )}
      </Link>
    </div>
  );
};

export default HeroCard;
