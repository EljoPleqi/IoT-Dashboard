import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AnnouncementView from './AnnouncementView/AnnouncementView';
import DeviceCard from './DeviceCard';
import SummaryView from './SummaryView/SummaryView';
import Filter from '../filter/Filter';
import { ChevronDownIcon } from '@heroicons/react/outline';

const MainView = () => {
  const [visible, setVisible] = useState(4);
  const [devices, setDevices] = useState([]);
  const [deviceStatus, setDeviceStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const screenMobile = window.matchMedia('(max-width: 600px)');
  const screenTablet = window.matchMedia('(max-width: 1024px)');
  const screenDesktop = window.matchMedia('(min-width: 1280px)');

  let mobile = screenMobile.matches;
  let tablet = screenTablet.matches;
  let desktop = screenDesktop.matches;

  useEffect(() => {
    if (mobile) setVisible(4);
    if (tablet) setVisible(devices.length);
  }, [mobile, tablet, devices]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/devices')
      .then((res) => setDevices(res.data));
    // makes call to the backend every 30 seconds to listen to changes in device status
    const data = setInterval(() => {
      axios
        .get('http://localhost:8000/devices')
        .then((res) => setDevices(res.data));
    }, 30000);

    return () => {
      clearInterval(data);
    };
  }, []);

  return (
    <>
      <div className="bg-neutral-100 lg:h-screen oversflow-hidden py-2 w-full flex px-2 flex-col items-center lg:justify-center">
        <div className="flex gap-2 ">
          <SummaryView devices={devices} searchTerm={searchTerm} />
          <AnnouncementView />
        </div>
        <Filter
          setDeviceStatus={setDeviceStatus}
          setSearchTerm={setSearchTerm}
        />
        <div className="md:max-w-3xl md:max-h-[75vh] xl:max-w-full overflow-auto">
          <DeviceCard visible={visible} devices={devices} />
        </div>

        {desktop && (
          <button
            className="py-3 px-8 bg-[#004994]  text-white rounded-md mt-6 hover:shadow-sm hover:bg-[#0070E0] text-sm flex items-center gap-2 active:translate-y-1 active:bg-blue-700"
            onClick={() => setVisible((visible) => visible + 4)}
          >
            <ChevronDownIcon className="h-5 w-5" />
            <p>Load More Devices</p>
          </button>
        )}
        {mobile && (
          <button
            className="py-3 px-8 bg-[#004994]  text-white rounded-md mt-6 hover:shadow-sm hover:bg-[#0070E0] text-sm"
            onClick={() => setVisible((visible) => visible + 99)}
          >
            View All Devices
          </button>
        )}
      </div>
    </>
  );
};

export default MainView;
