import axios from 'axios';

export class HttpMethods {
    host: string;
    headers: any;

    constructor(host, headers) {
        this.host = host;
        this.headers = headers.headers;
    }

    /**
     * Function to make get request
     * @param endPoint
     * @param queryParams
     * @returns {Response}
     */
    get(endPoint: string, queryParams?: object) {
        axios.defaults.timeout = 40000;
        queryParams['appid'] =  process.env.app_id_token != undefined ? process.env.app_id_token : '7bbd855b4f36737c469812755bce278a';
        const queryString = this._buildQueryString(queryParams);
        let response = undefined;
        try {
            response = axios.get(`http://api.openweathermap.org${endPoint}?${queryString}`);
        } catch (e) {
            console.log(e);
        }
        return response.then((response) => {
            if(process.env.DEBUG === 'true') {
                console.log(`Response:  \nStatus Code: ${response.status}\nCity Object:\n${JSON.stringify(response.data.city, null, '\t')}`);
            }
            return response.data.city;
        });
    }

    _buildQueryString(parameters: object): string {
        return Object.keys(parameters).map(key => `${key}=${parameters[key]}`).join('&');
    }


}
