import React from 'react';
import { ServerIcon } from '@heroicons/react/outline';

const SummaryView = ({ devices }) => {
  const on = [];
  const off = [];

  devices.map((device) => (device.status ? on.push(device) : off.push(device)));

  return (
    <div className="flex gap-4 ">
      {' '}
      <div className="h-64 w-64 bg-white shadow-sm md:flex hidden py-8 items-center gap-4 flex-col rounded-md">
        <div className="text-sm flex gap-1">
          <ServerIcon className="h-5 w-5" />
          <p>Device Overview</p>
        </div>
        <div className="md:flex hidden font-medium">
          <div className="px-4 border-r-2  flex flex-col gap-2 items-center justify-between">
            <p>online</p>
            <p>{on.length}</p>
            <div className=" h-28 w-10 bg-neutral-300 flex">
              <div
                className=" h-28 w-10 bg-green-500 place-self-end"
                style={{ height: `${(on.length / devices.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="px-4 flex flex-col items-center gap-2 justify-between">
            <p>offline</p>
            <p>{off.length}</p>
            <div className=" h-28 w-10 flex bg-neutral-300">
              <div
                className=" h-28 w-10 bg-red-500 place-self-end"
                style={{ height: `${(off.length / devices.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryView;
