import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { PetBlogRoutes } from '../petblog/routes/PetBlogRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      {/* auth routes */}
      <Route path='/auth/*' element={<AuthRoutes />} />
      {/* pet blog routes */}
      <Route path='/*' element={<PetBlogRoutes />} />
      {/* private routes */}
    </Routes>
  );
};
