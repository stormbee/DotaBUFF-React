import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const ItemToolTip = ({
  item,
  isBelowViewport,
  isRightOfViewport,
  popupRef,
}) => {
  return (
    <div
      className={`absolute z-10 ${
        isBelowViewport ? 'bottom-16 ' : '-bottom-24  top-16'
      } ${isRightOfViewport ? '-right-0' : 'left-0'}`}
    >
      <div
        className="bg-gradient-to-br from-slate-200 to-slate-500 text-black  rounded-md p-2 w-112"
        ref={popupRef}
      >
        {/* Item Name, Price and Image div*/}
        <div className="flex justify-start items-center">
          <img
            src={item.link}
            alt={item.name}
            className="w-10 h-8 rounded-sm"
          />
          <div className="flex flex-col justify-center items-start">
            <div className="font-bold text-sm ml-4">{item.name_loc}</div>
            {item.price ? (
              <div className="font-bold text-xs ml-4">
                {item.price && (
                  <div className="flex justify-center items-center text-xs">
                    <img
                      src={`${
                        item.desc.shop.includes('Home')
                          ? 'https://www.dotabuff.com/assets/shop_main-f3ea6205214daeb87902901f5d7dd7fc8076f41ca98f2dd3e63f96ecc9a46d84.png'
                          : 'https://www.dotabuff.com/assets/shop_secret-032213a96d46cb622c34b92c97e876e0dc60d6194739cab3c7447018f1d6f588.png'
                      } `}
                      alt={item.desc.name}
                      className="w-6 h-6  bg-gray-400 rounded-xl"
                    />
                    <img
                      src="https://www.dotabuff.com/assets/gold-icon-reborn-9909c266d01dc89237bcafc62f1a5e64cc1297a26aeb2390ffe5ff85cd859cfa.png"
                      alt={item.price}
                      className="w-4 h-4 ml-2"
                    />
                    <div className="font-bold text-black  ml-1">
                      {item.price}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex justify-center items-center text-xs">
                <div className="ml-4 font-bold tracking-wide text-gray-700">
                  Neural Item
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Cooldown div and Manacost div */}
        <div className="flex justify-start items-center mt-1">
          {item.desc.cooldown && (
            <div className="flex justify-start items-center">
              <img
                src="https://www.dotabuff.com/assets/cooldown-icon-15eb1a08946438ec5ef4d3f30026b0050ab04445bf17bfc4a0255be5e63fcb4e.png"
                alt={item.desc.name}
                className="w-4 h-4 rounded-sm"
              />
              <div className="font-bold pt-0.5 text-xs ml-2">
                {item.desc.cooldown}
              </div>
            </div>
          )}
          {/* Mana Cost div */}
          {item.desc.manacost && (
            <div className="ml-4 flex justify-start items-center">
              <img
                src="https://www.dotabuff.com/assets/mana-icon-a3a578ea3f7fce23743ce78e737e8e58389864699ba64cc67ee652c4f6c46e4a.png"
                alt={item.desc.name}
                className="w-4 h-4 rounded-sm"
              />
              <div className="font-bold pt-0.5 text-xs ml-2">
                {item.desc.manacost}
              </div>
            </div>
          )}
        </div>
        {/* Lore div */}
        {item.desc.lore && (
          <div className="text-gray-800 text-xs py-2">{item.desc.lore}</div>
        )}
        {/* Active skill and description */}
        {item.desc.active && (
          <>
            <div className="text-xs underline mt-2">{item.desc.active}</div>
            <div className="text-xs">{item.desc.active_desc}</div>
          </>
        )}
        {/* Passive skill and description */}
        {item.desc.passive && (
          <>
            <div className="text-xs underline mt-2">{item.desc.passive}</div>
            <div className="text-xs">{item.desc.passive_desc}</div>
          </>
        )}
        {/* Notes */}
        {item.desc.notes && (
          <div className="text-xs py-2">{item.desc.notes}</div>
        )}
        {/* Uses div */}
        {item.desc.use && (
          <div className="text-xs py-2">
            <div className="font-bold">{item.desc.use}</div>
            <div>{item.desc.use_desc}</div>
          </div>
        )}
        {/* Shop */}
        {item.desc.shop && (
          <div className="flex justify-start items-center">
            <img
              src={`${
                item.desc.shop.includes('Home')
                  ? 'https://www.dotabuff.com/assets/shop_main-f3ea6205214daeb87902901f5d7dd7fc8076f41ca98f2dd3e63f96ecc9a46d84.png'
                  : 'https://www.dotabuff.com/assets/shop_secret-032213a96d46cb622c34b92c97e876e0dc60d6194739cab3c7447018f1d6f588.png'
              } `}
              alt={item.desc.name}
              className="w-6 h-6 bg-gray-400 rounded-xl"
            />
            <div className="pt-0.5 text-xs ml-2">{item.desc.shop}</div>
          </div>
        )}
        {/* Builds From */}
        <div className="flex flex-col">
          {item.desc.builds_from && (
            <div className="text-md font-bold">Builds From:</div>
          )}
          {item.desc.builds_from &&
            item.desc.builds_from.map((item) => (
              <div
                className="flex justify-between items-center  text-xs py-1 "
                key={uuidv4()}
              >
                <div className="w-32 flex justify-start items-center  ">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-4 h-4 mr-1 rounded-sm"
                  />
                  <div className="text-xs font-bold ">{item.title}</div>
                </div>
                <div className="w-16 text-gold flex justify-center items-center ">
                  {item.cost.length >= 5
                    ? item.cost.replace(',', '')
                    : item.cost}
                </div>
              </div>
            ))}
        </div>
        {/* Builds Into */}
        <div className="flex flex-col">
          {item.desc.builds_into && (
            <div className="text-md font-bold">Builds Into:</div>
          )}
          {item.desc.builds_into &&
            item.desc.builds_into.map((item) => (
              <div
                className="flex justify-between items-center  text-xs py-1 "
                key={uuidv4()}
              >
                <div className="w-32 flex justify-start items-center  ">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-4 h-4 mr-1 rounded-sm"
                  />
                  <div className="text-xs font-bold ">{item.title}</div>
                </div>
                <div className="w-16 text-gold flex justify-center items-center ">
                  {item.cost.length >= 5
                    ? item.cost.replace(',', '')
                    : item.cost}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ItemToolTip;
