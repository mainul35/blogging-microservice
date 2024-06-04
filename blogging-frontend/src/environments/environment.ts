// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL: "http://localhost:8081/",
  RESOURCE_URL: `http://localhost:8081/api/v1/`,
  AUTH_URL: "http://localhost:9000/auth/",
  authorize_uri: "http://localhost:9000/oauth2/authorize?",
  client_id: "client1",
  redirect_uri: "http://localhost:4200/authorized",
  scope: "openid",
  response_type: "code",
  response_mode: "form_post",
  code_challenge_method: "S256",
  code_challenge: "D31JLsveEKURXL8x-yvTocCufiwNAScTN5kEsYwDQWI",
  code_verifier: "g4qE6ENmlEHpUxNIv0XrE57LfLjgqG28BRke4XLq6AR",
  token_url: 'http://localhost:9000/oauth2/token',
  grant_type: "authorization_code"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
