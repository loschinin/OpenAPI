import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { AboutPage } from '../pages/AboutPage';
import { ArticlesPage } from '../pages/ArticlesPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/news" element={<ArticlesPage />} />
    </Routes>
  );
};
