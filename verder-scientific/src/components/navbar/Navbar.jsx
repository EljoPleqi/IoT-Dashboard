import React, { useState } from 'react';
import logo from '../../img/verder-scientific-logo-removebg-preview.png';

import {
  MenuIcon,
  HomeIcon,
  ChartBarIcon,
  ExclamationCircleIcon,
  CogIcon,
} from '@heroicons/react/outline';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="px-8 bg-neutral-50 lg:hidden flex flex-wrap items-center justify-evenly py-8">
      <img src={logo} alt="" className="w-24 py-8" />
      <MenuIcon className="h-6 w-6" onClick={() => setOpen(!open)} />
      {open && (
        <ul className="flex p-8 flex-col w-[75vh] gap-4 text-xs">
          <a href="/">
            <li className="bg-white p-3 shadow-sm rounded-lg cursor-pointer active:shadow-none  hover:border-2 border-2 border-white hover:border-neutral-200 active:bg-neutral-100 active:translate-y-1 flex gap-2 items-center ">
              <HomeIcon className="h-6 w-6" /> <p>Dashboard</p>
            </li>
          </a>
          <li className="bg-white p-3 shadow-sm rounded-lg cursor-pointer active:shadow-none  hover:border-2 border-2 border-white hover:border-neutral-200 active:bg-neutral-100 active:translate-y-1 flex gap-2 items-center ">
            <ChartBarIcon className="h-6 w-6" />
            <p>Reports</p>
          </li>
          <li className="bg-white p-3 shadow-sm rounded-lg cursor-pointer active:shadow-none  hover:border-2 border-2 border-white hover:border-neutral-200 active:bg-neutral-100 active:translate-y-1 flex gap-2 items-center ">
            <ExclamationCircleIcon className="h-6 w-6" /> <p>Error log</p>
          </li>
          <li className="bg-white p-3 shadow-sm rounded-lg cursor-pointer active:shadow-none  hover:border-2 border-2 border-white hover:border-neutral-200 active:bg-neutral-100 active:translate-y-1 flex gap-2 items-center ">
            <CogIcon className="h-6 w-6" /> <p>Settings</p>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
