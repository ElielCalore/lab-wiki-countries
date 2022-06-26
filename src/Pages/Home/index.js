import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <Link path to="/">
        Home |
      </Link>
      <Link to="/CountryDetails">CountryDetails | </Link>
      <Link to="/CountriesList">CountriesList | </Link>
    </>
  );
}
