import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginScreen from '../components/login/LoginScreen';
import DashboarRoutes from './DashboarRoutes';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<DashboarRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
