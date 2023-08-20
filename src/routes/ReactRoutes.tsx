import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { AboutPage } from '../pages/AboutPage';

export const ReactRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};
