import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemToolTip from '../UI/ItemToolTip';
const ItemCard = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isBelowViewport, setIsBelowViewport] = useState(false);
  const [isRightOfViewport, setIsRightOfViewport] = useState(false);

  const cardRef = useRef(null);
  const popupRef = useRef(null);
  useEffect(() => {
    if (showPopup) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const popupRect = popupRef.current.getBoundingClientRect();

      const isBelow = cardRect.bottom + popupRect.height > window.innerHeight;
      const isRight = cardRect.right + popupRect.width > window.innerWidth;
      setIsBelowViewport(isBelow);
      setIsRightOfViewport(isRight);
    }
  }, [showPopup]);
  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative" ref={cardRef}>
      <div
        className="relative shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to={`/item/${item.name}`}>
          <img
            src={item.link}
            alt={item.name}
            height="64"
            width="82"
            className="m-0.5"
          />
        </Link>
      </div>
      {showPopup && (
        <ItemToolTip
          item={item}
          isBelowViewport={isBelowViewport}
          isRightOfViewport={isRightOfViewport}
          popupRef={popupRef}
        />
      )}
    </div>
  );
};

export default ItemCard;
