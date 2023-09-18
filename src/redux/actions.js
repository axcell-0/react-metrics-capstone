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
    const response = await axios.get(
      `https://restcountries.com/v2/name/${countryName}`,
    );
    const { data } = response;

    if (data.length === 0) {
      dispatch(setCountryData([]));
    } else {
      dispatch(setCountryData(data));
    }
  } catch (error) {
    dispatch(setCountryData([]));
  }
};
