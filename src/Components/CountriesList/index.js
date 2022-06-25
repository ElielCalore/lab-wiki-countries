import { Link } from 'react-router-dom';
export function CountriesList({ country }) {
  return (
    <>
      <Link to={`/CountriesDetails`}>
        <h1 style={{ cursor: 'pointer' }}>{country.alpha3Code}</h1>
      </Link>
    </>
  );
}
//const { idPost } = useParams();
