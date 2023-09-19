import axios from 'axios';

export const setCountryName = (name) => ({
  type: 'SET_COUNTRY_NAME',
  payload: name,
});

export const setCountryData = (data) => ({
  type: 'SET_COUNTRY_DATA',
  payload: data,
});

export const fetchCountryData = (countryName) => async (dispatch) => {
  try {
    let url = 'https://restcountries.com/v2/all';
    if (countryName && countryName !== 'all') {
      url = `https://restcountries.com/v2/name/${countryName}`;
    }
    const response = await axios.get(url);
    const { data } = response;

    dispatch(setCountryData(data));
  } catch (error) {
    dispatch(setCountryData([]));
  }
};
