import React from 'react';
import SidebarNav from './sidebarNav/SidebarNav';
import MainView from './components/mainView/MainView';
import Navbar from './components/navbar/Navbar';

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <SidebarNav />
      <Navbar />
      <MainView />
    </div>
  );
};

export default Home;
