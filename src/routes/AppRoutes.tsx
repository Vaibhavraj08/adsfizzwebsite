import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Services } from '../pages/Services';
import { Contact } from '../pages/Contact';
import { Advertisers } from '../pages/Advertisers';
import { Publishers } from '../pages/Publishers';
import { NotFound } from '../pages/NotFound';
import { PATHS } from './paths';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.ABOUT} element={<About />} />
      <Route path={PATHS.SERVICES} element={<Services />} />
      <Route path={PATHS.ADVERTISERS} element={<Advertisers />} />
      <Route path={PATHS.PUBLISHERS} element={<Publishers />} />
      <Route path={PATHS.CONTACT} element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
