import React from 'react';

const Filter = ({ setDeviceStatus, setSearchTerm }) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row bg-white md:w-[81%] lg:w-[86%] rounded-md shadow-sm justify-between py-8 md:py-4  px-8 mt-4">
      <input
        type="text"
        placeholder="Search by device name"
        className="md:w-[24rem] bg-neutral-100 rounded-md py-2 px-4 "
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <select
        name="status"
        id=""
        className="cursor-pointer"
        onChange={(e) => {
          setDeviceStatus(e.target.value);
        }}
      >
        <option value="all">All Devices</option>
        <option value="online">Online</option>
        <option value="offline">Offline</option>
      </select>
    </div>
  );
};

export default Filter;
