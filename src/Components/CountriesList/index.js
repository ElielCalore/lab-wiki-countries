import { Link } from 'react-router-dom';
import countries from '../../countries.json';
import { useState } from 'react';
import style from './style.module.css';
export function CountriesList() {
  const [allCountries, setCountries] = useState(countries);
  console.log(allCountries);
  return (
    <>
      <div>
        {allCountries.map((currentElement) => {
          return (
            <div className={style.coutriesList}>
              <Link to="/CountryDetails">
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${currentElement.alpha2Code.toLowerCase()}.png`}
                />
                <p>{currentElement.name.common}</p>
              </Link>
              ;
            </div>
          );
        })}
      </div>
    </>
  );
}
//const { idPost } = useParams();
//
