import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Home = () => {
      return (
            <div>
                  <Header/>
                  <h2>this is the Home component</h2>
                  <Outlet/>
            </div>
      );
};

export default Home;