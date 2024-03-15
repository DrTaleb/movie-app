import * as FingerprintJS from '@fingerprintjs/fingerprintjs';
import { IaxiosConfig } from './model';

const fpPromise = FingerprintJS.load();
// Initialize an agent at application startup.
let visitorId = '';

// Analyze the visitor when necessary.
fpPromise
  .then((fp) => fp.get())
  .then((result) => {
    visitorId = result.visitorId;
    localStorage.setItem('visitorId', visitorId);
  });

const API_URL = import.meta.env.VITE_API_URL;

export function setupAxios(axios: any) {
  axios.defaults.baseURL = API_URL;

  axios.interceptors.request.use(
    (config: { headers: IaxiosConfig }) => {
      // config.headers['Access-Control-Allow-Origin'] = '*';
      // config.headers['Access-Control-Allow-Credentials'] = true;
      // config.headers['Access-Control-Allow-Methods'] = 'GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH';
      config.headers['Content-Type'] = 'application/json';
      // config.headers['x-client-id'] = visitorId;
      // config.headers['Acccept-Encoding'] = 'gzip, deflate, br';
      // config.headers['Access-Control-Max_Age'] = 36000;
      // config.headers['Access-Control-Allow-Headers'] =
        // 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, access-control-allow-origin, x-app-key, x-role, x-client-version, x-client-id, sentry-trace, client-id, device-id, menu-access, role-permission, user-agent, user';

      return config;
    },
    (err: any) => {
      console.log(err)
    },
  );

  axios.interceptors.response.use(
    (response: any) => {
      return response;
    },
    async (error: any) => {
      if (error.response) {
        return Promise.reject(error.response?.data);
      }

      return Promise.reject(error);
    },
  );
}
