import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { openMenuState } from "../contexts/recoil";
import { useRecoilState } from "recoil";

function Menu() {
  const [menuOpen, setMenuOpen] = useRecoilState(openMenuState);
  const clickLink = () => {
    setMenuOpen(false);
  };
  const [animation, setAnimation] = useState("");
  useEffect(() => {
    menuOpen
      ? setAnimation("animate-show-menu")
      : setAnimation("animate-hide-menu");
  }, [menuOpen]);
  return (
    <div
      id='menu'
      className={`fixed z-10 right-0 h-full w-0 pt-[60px] pb-4 bg-primary animate-hide-menu ${animation}`}
    >
      <ul className='lg:max-w-[300px] py-4 text-gray-500 text-3xl font-bold'>
        <li
          className='flex py-2 pl-2 w-full hover:text-tertiary hover:bg-secondary hover:border-l-2 hover:border-tertiary'
          onClick={clickLink}
        >
          <Link
            to={window.location.pathname === "" ? "" : "../"}
            className='w-full flex-grow'
          >
            Home
          </Link>
        </li>
        <li
          className='flex py-2 pl-2 w-full hover:text-tertiary hover:bg-secondary hover:border-l-2 hover:border-tertiary'
          onClick={clickLink}
        >
          <Link
            to={window.location.pathname === "" ? "./filter" : "../filter"}
            className='w-full flex-grow'
          >
            Filter
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
