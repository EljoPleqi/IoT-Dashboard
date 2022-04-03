import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SidebarNav from '../../sidebarNav/SidebarNav';
import Navbar from '../navbar/Navbar';
import ActivityLog from './ActivityLog';
import DeviceInfo from './DeviceInfo';

const MainDeviceView = () => {
  const [device, setDevice] = useState({});
  let { DeviceId } = useParams();
  console.log(DeviceId);

  useEffect(() => {
    console.log('inside');
    axios.get(`http://localhost:8000/devices/${DeviceId}`).then((res) => {
      console.log(res);
      setDevice(res.data);
    });
  }, [DeviceId]);

  return (
    <div className="flex flex-col lg:flex-row">
      <SidebarNav />
      <Navbar />
      <div className="flex w-full flex-col items-center justify-center gap-24 px-4">
        <DeviceInfo device={device} />
        <ActivityLog device={device} />
      </div>
    </div>
  );
};

export default MainDeviceView;
