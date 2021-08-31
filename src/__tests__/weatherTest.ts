import { HttpMethods } from '../utils/HttpMethods';

describe('Test weather application', () => {
    const host = "http://api.openweathermap.org/data/2.5";
    const requestHeaders = {headers: {'Content-Type': 'application/json', Accept: '*/*'}};
    const request: HttpMethods = new HttpMethods(host, requestHeaders);
    let queryParams;
    const expectedWeatherResultsOfCity = {
        id: 0,
        name: "San Francisco",
        coord: {
            lat: 37.7725,
            lon: -122.4147
        },
        country: "US",
        population: 0,
        timezone: -25200,
        sunrise: 1630330711,
        sunset: 1630377735
    }

    beforeEach(() => {
        queryParams = {};
    });


    it('Test get api call by city', (done) => {
        queryParams['q'] = 'San%20Francisco';
        request.get('/data/2.5/forecast', queryParams).then((response) => {
            expect(response.name).toEqual(expectedWeatherResultsOfCity.name);
            done();
        });
    });

    it('Test get api call by latitude and longtitude', (done) => {
        queryParams['lat'] = '37.7725';
        queryParams['lon'] = '-122.4147';
        request.get('/data/2.5/forecast', queryParams).then((response) => {
            expect(response.coord.lat).toEqual(expectedWeatherResultsOfCity.coord.lat);
            expect(response.coord.lon).toEqual(expectedWeatherResultsOfCity.coord.lon);
            done();
        });
    });

    it('Test get api call by zip code', (done) => {
        queryParams['zip'] = '94103';
        request.get('/data/2.5/forecast', queryParams).then((response) => {
            expect(response.name).toEqual(expectedWeatherResultsOfCity.name);
            done();
        });
    });
});
