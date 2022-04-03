import React from 'react';
import { Link } from 'react-router-dom';
// import img from '../../img/pic-onh-p2.webp';
// import img2 from '../../img/aaf-113.webp';

const DeviceCard = ({ devices, visible }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 xl:flex-wrap md:flex-wrap lg:flex-nowrap lg:ml-[83rem] xl:ml-0 items-center justify-center lg:max-h-[75vh]">
      {devices.slice(0, visible).map((device) => (
        <Link to={`devices/${device.id}`} key={device.id}>
          <div className="flex gap-4 cursor-pointer mt-36  ">
            <div
              className="bg-white w-64 h-40 rounded-md shadow-sm justify-end py-4 items-center flex flex-col
            hover:border-2 hover:border-neutral-200/80 hover:border-t-0 hover:rounded-md hover:-translate-y-2 transition-all hover:shadow-md"
            >
              <img
                src={`http://localhost:8000${device.image}`}
                alt=""
                className="object-cover w-[75%]"
              />
              <div className="flex flex-col gap-2 px-4">
                <p>{device.name}</p>
                <p className="flex gap-2 text-xs">
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
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DeviceCard;
