//Spotify API interfacing functions will go here
//Redirect URI: http://localhost:8888/callback
import axios from 'axios';
import qs from 'qs';
const clientSecret = '8e248345498646798523d0a0c65a652f';
const clientID = '34e7f94cb9ed410b879620808babd55e'; //we should find a way to hide this.

//global variables
let accessToken;
let expiresIn;

export const Spotify = {
  //This is the most important function in the Spotify class
  async getAccessToken() {
    //if the accessToken has already been acquired then we can just return it
    if (accessToken) {
      return accessToken;
    }
    //if no accessToken, we get a new one
    else {
      const headers = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: clientID,
          password: clientSecret,
        },
      };

      const data = {
        grant_type: 'client_credentials',
      };

      const res = await axios.post(
        'https://accounts.spotify.com/api/token',
        qs.stringify(data),
        headers
      );

      accessToken = res.data.access_token;
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      return accessToken;
    }
  },

  async getAlbum(albumID) {
    let response = await fetch(`https://api.spotify.com/v1/albums/${albumID}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${await this.getAccessToken()}`,
      },
    });
    let responseJSON = await response.json();
    return responseJSON;
  },
};
