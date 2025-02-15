import ClientOAuth2 from 'client-oauth2'

/**
 * Get OAuth2 client instance
 * @returns a new ClientOauth2 instance
 */

const getOauthClient = () =>
  new ClientOAuth2({
    accessTokenUri: process.env.REACT_APP_ACCESS_TOKEN_URL,
    authorizationUri: process.env.REACT_APP_AUTHORIZATION_URL,
    clientId: process.env.REACT_APP_CLIENT_ID,
    redirectUri: process.env.REACT_APP_CALLBACK_URL,
    scopes: [],
  })

export { getOauthClient }
