export const env = {
  production: true,
  apiUrl: 'https://api.themoviedb.org/3/',
  apiToken: process.env['NG_APP_BEARER_TOKEN'] || ''
};
