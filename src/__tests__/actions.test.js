import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  setCountryName,
  setCountryData,
  fetchCountryData,
} from '../redux/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Country Actions', () => {
  let axiosMock;
  let store;

  beforeEach(() => {
    axiosMock = new MockAdapter(axios);
    store = mockStore({});
  });

  afterEach(() => {
    axiosMock.reset();
  });

  it('should set country name', () => {
    const name = 'United States';
    const expectedAction = {
      type: 'SET_COUNTRY_NAME',
      payload: name,
    };
    expect(setCountryName(name)).toEqual(expectedAction);
  });

  it('should set country data', () => {
    const data = [{ name: 'United States' }];
    const expectedAction = {
      type: 'SET_COUNTRY_DATA',
      payload: data,
    };
    expect(setCountryData(data)).toEqual(expectedAction);
  });

  it('should fetch country data successfully', async () => {
    const countryName = 'United States';
    const responseData = [{ name: 'United States' }];
    axiosMock.onGet(`https://restcountries.com/v2/name/${countryName}`).reply(200, responseData);

    const expectedActions = [
      setCountryData(responseData),
    ];

    await store.dispatch(fetchCountryData(countryName));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should handle fetch country data failure', async () => {
    const countryName = 'Invalid Country';
    axiosMock.onGet(`https://restcountries.com/v2/name/${countryName}`).reply(404);

    const expectedActions = [
      setCountryData([]),
    ];

    await store.dispatch(fetchCountryData(countryName));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
