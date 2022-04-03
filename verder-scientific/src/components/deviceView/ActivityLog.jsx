import React from 'react';

const ActivityLog = ({ device }) => {
  return (
    <div className="flex flex-col gap-4 text-xs pb-16">
      <div className="flex gap-4 items-center">
        <div
          className={`h-3 w-3 rounded-full ${
            device.status ? 'bg-green-500' : 'bg-red-500'
          }`}
        ></div>
        <div className="flex lg:flex-row flex-col gap-2 ">
          <span className="font-semibold">{device.name}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>{' '}
        </div>
        <div className=" border-l-2 pl-2 lg:pl-8">
          {' '}
          {new Date().toDateString()}
        </div>
      </div>
      <div className="flex gap-4 items-center ">
        <div
          className={`h-3 w-3 rounded-full ${
            device.status ? 'bg-green-500' : 'bg-red-500'
          }`}
        ></div>
        <div className="flex lg:flex-row flex-col gap-2 ">
          <span className="font-semibold">{device.name}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>{' '}
        </div>
        <div className=" border-l-2 pl-2 lg:pl-8">
          {' '}
          {new Date().toDateString()}
        </div>
      </div>
      <div className="flex gap-4 items-center ">
        <div
          className={`h-3 w-3 rounded-full ${
            device.status ? 'bg-green-500' : 'bg-red-500'
          }`}
        ></div>
        <div className="flex lg:flex-row flex-col gap-2 ">
          <span className="font-semibold">{device.name}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>{' '}
        </div>
        <div className=" border-l-2 pl-2 lg:pl-8">
          {' '}
          {new Date().toDateString()}
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
