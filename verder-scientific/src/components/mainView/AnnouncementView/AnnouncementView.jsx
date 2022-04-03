import React from 'react';
import { BellIcon } from '@heroicons/react/outline';
const AnnouncementView = () => {
  return (
    <div className="h-64 md:w-[22rem] lg:w-[32rem] xl:w-[52rem] bg-white shadow-sm md:flex hidden flex-col gap-4 py-8 px-2 items-center justify-center rounded-md">
      <div className="text-sm flex gap-1">
        <BellIcon className="h-5 w-5" />
        <p>Company Announcements</p>
      </div>
      <div className="flex flex-col gap-2 overflow-auto  ">
        <div className="flex bg-neutral-50 p-4 justify-evenly rounded-md max-w-3xl gap-1 text-xs hover:bg-[#C2E6FF] hover:-translate-y-1">
          <div className="border-r-2 px-2 hover:border-r-[#016FB8]">
            <p>31-Mar</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
        </div>
        <div className="flex bg-neutral-50 p-4 justify-evenly rounded-md max-w-3xl gap-1 text-xs hover:bg-[#C2E6FF]  hover:-translate-y-1">
          <div className="border-r-2 px-2 hover:border-r-[#016FB8]">
            <p>31-Mar</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
        </div>
        <div className="flex bg-neutral-50 p-4 justify-evenly rounded-md max-w-3xl gap-1 text-xs hover:bg-[#C2E6FF]  hover:-translate-y-1">
          <div className="border-r-2 px-2 hover:border-r-[#016FB8]">
            <p>31-Mar</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
        </div>
        <div className="flex bg-neutral-50 p-4 justify-evenly rounded-md max-w-3xl gap-1 text-xs hover:bg-[#C2E6FF]  hover:-translate-y-1">
          <div className="border-r-2 px-2 hover:border-r-[#016FB8]">
            <p>31-Mar</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
        </div>
        <div className="flex bg-neutral-50 p-4 justify-evenly rounded-md max-w-3xl gap-1 text-xs hover:bg-[#C2E6FF]  hover:-translate-y-1">
          <div className="border-r-2 px-2 hover:border-r-[#016FB8]">
            <p>31-Mar</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementView;
