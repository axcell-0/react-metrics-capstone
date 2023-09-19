const initialState = {
  countryName: 'Am',
  countryData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTRY_NAME':
      return {
        ...state,
        countryName: action.payload,
      };
    case 'SET_COUNTRY_DATA':
      return {
        ...state,
        countryData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
