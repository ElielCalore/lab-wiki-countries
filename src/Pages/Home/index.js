import countries from '../../countries.json';
import { useState } from 'react';
import { CountriesList } from '../../Components/CountriesList';

export function Home() {
  const [allCountries, setCountries] = useState(countries);

  return (
    <>
      <div>
        {allCountries.map((currentElement) => {
          return (
            <div>
              <CountriesList country={currentElement} />
            </div>
          );
        })}
      </div>
      ;
    </>
  );
}
