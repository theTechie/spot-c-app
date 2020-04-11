import queryString from 'query-string';
import ClientSecrets from './client_secret.json';

export async function signInWithGoogleAsync() {
  try {
    const result = await Expo.Google.logInAsync({
      webClientId: ClientSecrets.webClientId,
      androidClientId: ClientSecrets.androidClientId,
      iosClientId: ClientSecrets.iosClientId,
      iosStandaloneAppClientId: ClientSecrets.iosClientId,
      scopes: ['profile', 'email'],
      // behavior: 'web',
    });

    if (result.type === 'success') {
      return result;
    }
    return { cancelled: true };
  } catch (e) {
    return { error: e };
  }
}

export async function getNewAccessTokenAsync(refreshToken) {
  try {
    console.log({
      client_id: ClientSecrets.iosClientId,
      client_secret: ClientSecrets.clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    });

    const tokenInfo = await fetch('https://www.googleapis.com/oauth2/v4/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: queryString.stringify({
        client_id: ClientSecrets.iosClientId,
        client_secret: ClientSecrets.clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      }),
    });

    console.log(await tokenInfo.json());

    return tokenInfo;

    // const result = fetch(`https://accounts.google.com/o/oauth2/v2/token?`)
  } catch (e) {
    return { error: e };
  }
}