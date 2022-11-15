import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '../components';
import { useStateContext } from '../contexts/ContextProvider';


const NavButton = ({ place, title, customFunc, icon, color, dotColor }) => {
  return (
      <button data-tip={title} place={place} type="button" onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
          <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
          {icon}
      </button>
  )
}

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize])

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title="Menu" place="bottom" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex">
        <NavButton title="Cart" dotColor="#03C9D7" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notifications" dotColor="#03C9D7" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
          <div data-tip="Profile" className=" flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('userProfile')}>
            <img className="rounded-full w-8 h-8" src={avatar} alt="avatar" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span> {' '} <span className="text-gray-400 font-bold ml-1 text-14">Bryan</span>
            </p>
            <MdKeyboardArrowDown  className="text-gray-400 text-14"/>
          </div>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar