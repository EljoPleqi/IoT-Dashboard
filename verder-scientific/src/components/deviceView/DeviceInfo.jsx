import React from 'react';
import { PauseIcon, PlayIcon } from '@heroicons/react/outline';
const DeviceInfo = ({ device }) => {
  return (
    <div className="flex md:flex-row flex-col md:gap-8 gap-16 items-center justify-center md:px-4 p-8 bg-neutral-50 rounded-md ">
      <div>
        <img
          src={`http://localhost:8000${device.image}`}
          alt=""
          className="object-cover h-64"
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-10 max-w-lg">
          <span className="flex md:gap-6 gap-2 items-center">
            <h2 className="font-semibold">{device.name}</h2>{' '}
            <p className="flex gap-2 ">
              Status:{' '}
              <span
                className={`px-1 ${
                  device.status
                    ? 'bg-green-500/30 text-green-500'
                    : 'bg-red-500/30 text-red-500'
                } font-bold`}
              >
                {device.status ? 'ONLINE' : 'OFFLINE'}
              </span>
            </p>
          </span>
          <p>{device.description}</p>
        </div>
        <div>
          <button
            className={`px-8 py-3 rounded-md text-white active:translate-y-1 ${
              device.status
                ? 'bg-red-500 hover:bg-red-400 active:bg-red-800'
                : 'bg-green-500 hover:bg-green-400 active:bg-green-800'
            }`}
          >
            {device.status ? (
              <span className="flex gap-2 items-center">
                <PauseIcon className="h-5 w-5" />
                <p>Stop Operation</p>
              </span>
            ) : (
              <span className="flex gap-2 items-center">
                <PlayIcon className="h-5 w-5" />
                <p>Start Operation </p>
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeviceInfo;
