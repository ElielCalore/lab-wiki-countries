import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { CountriesList } from './Components/CountriesList';
import { CountryDetails } from './Components/CountryDetails';
import { Home } from './Pages/Home';

export function App() {
  return (
    <div>
      <NavBar></NavBar>

      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route path={'/CountryDetails'} element={<CountryDetails />} />
        <Route path={'/CountriesList'} element={<CountriesList />} />
      </Routes>
    </div>
  );
}
/*
 

*/
