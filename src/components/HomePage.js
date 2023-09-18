import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { setCountryName, fetchCountryData } from '../redux/actions';

const HomePage = () => {
  const dispatch = useDispatch();
  const countryName = useSelector((state) => state.countryName);
  const countryData = useSelector((state) => state.countryData);

  useEffect(() => {
    dispatch(fetchCountryData(countryName));
  }, [dispatch, countryName]);

  return (
    <div>
      <div className="bg-gradient-to-b from-sky-500 to-sky-700 p-4 grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-6 text-white">
        <h1>Country Metrics</h1>
        <input
          type="text"
          className="p-1 border-2 border-white ease-in rounded-md text-sky-700"
          placeholder="Enter country name"
          value={countryName}
          onChange={(e) => dispatch(setCountryName(e.target.value))}
        />
      </div>
      <p className="text-white bg-sky-800 p-1 font-lato">country by Category</p>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {countryData.length === 0 ? (
          <li>No country data available.</li>
        ) : (
          countryData.map((country) => (
            <Link to={`/details/${country.alpha3Code}`} key={country.alpha3Code}>
              <li className="relative odd:bg-sky-700 even:bg-sky-600 text-white h-64">
                <img src={country.flags.png} alt={`${country.name} flag`} className="w-64 md:w-72" />
                <div className="p-2 flex flex-col items-end">
                  <strong className="font-bold text-2xl uppercase">
                    {country.name.slice(0, 10)}
                  </strong>
                  <p className="flex gap-1">
                    Population:
                    {' '}
                    {country.population}
                  </p>
                  <div className="absolute top-2 left-38 p-2 bg-white rounded-full hover:bg-sky-600 hover:text-white">
                    <Link to={`/details/${country.alpha3Code}`} className="font-bold text-sky-600">
                      <FaArrowRightLong className="h-2 w-2 font-bold text-sky-600" />
                    </Link>
                  </div>
                </div>
              </li>
            </Link>
          ))
        )}
      </ul>

    </div>
  );
};

export default HomePage;
