import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

const DetailsPage = () => {
  const { countryCode } = useParams();
  const countryData = useSelector((state) => state.countryData);
  const selectedCountry = countryData.find(
    (country) => country.alpha3Code === countryCode,
  );

  const renderDetailItem = (label, value, index) => (
    <li className={`h-32 flex justify-between items-center pl-2 pr-2 text-lg ${index % 2 === 0 ? 'bg-sky-600' : 'bg-sky-800'}`}>
      <p>{label}</p>
      <p className="flex gap-4">
        <span>{value}</span>
        <Link to="/" className="top-2 left-38 p-1 border-2 border-white text-white rounded-full">
          <FaArrowRightLong className="h-5 w-5" />
        </Link>
      </p>
    </li>
  );

  return (
    <div>
      <div className="flex justify-between items-center pl-2 pt-2 pb-2 pr-8 bg-sky-600 text-white">
        {selectedCountry.flag && (
          <img src={selectedCountry.flag} alt={`${selectedCountry.name} Flag`} className="w-32 border-white border-4 rounded" />
        )}
        <div className="flex flex-col items-end">
          <h1 className="font-bold text-2xl text-right uppercase">Country Details</h1>
          <h2 className="font-semibold text-lg">{selectedCountry.name}</h2>
          <span>{selectedCountry.population}</span>
        </div>
      </div>
      <p className="pl-2 pt-1 pb-1 text-white bg-sky-800">More details</p>
      <ul className="bg-sky-800 text-white">
        {renderDetailItem('Population', selectedCountry.population, 0)}
        {renderDetailItem('Area', `${selectedCountry.area} sq km`, 1)}
        {renderDetailItem('Region', selectedCountry.region, 2)}
        {renderDetailItem('Subregion', selectedCountry.subregion, 3)}
        {renderDetailItem('Capital', selectedCountry.capital, 4)}
        {renderDetailItem('Languages', selectedCountry.languages.map((lang) => lang.name).join(', '), 5)}
        {renderDetailItem('Currencies', selectedCountry.currencies.map((curr) => curr.name).join(', '), 6)}
        {renderDetailItem('Calling Codes', selectedCountry.callingCodes.join(', '), 7)}
      </ul>
    </div>
  );
};

export default DetailsPage;
