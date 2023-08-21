import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { AboutPage } from '../pages/AboutPage';
import { UserProfilePage } from '../pages/UserProfilePage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/user" element={<UserProfilePage />} />
    </Routes>
  );
};
