import { Navigate, Route, Routes } from 'react-router-dom';
import { PetBlogPage } from '../pages/PetBlogPage';

export const PetBlogRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<PetBlogPage />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
