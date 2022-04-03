import React from 'react';

const displayDate = new Date().toDateString();

const UserBar = () => {
  return (
    <>
      <div className="text-sm absolute -ml-[-80rem] -mt-[-2rem]">
        {displayDate}
      </div>
    </>
  );
};

export default UserBar;
