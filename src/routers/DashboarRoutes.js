import { Route, Routes } from 'react-router-dom';

import DcScree from '../components/dc/DcScree';
import HeroScreen from '../components/hero/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import Navbar from '../components/ui/NavBar';

const DashboarRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="dc" element={<DcScree />} />
        <Route path="hero" element={<HeroScreen />} />
        <Route path="marvel" element={<MarvelScreen />} />

        <Route path="search" element={<SearchScreen />} />

        <Route path="/" element={<MarvelScreen />} />
      </Routes>
    </>
  );
};

export default DashboarRoutes;
