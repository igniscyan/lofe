//Spotify API interfacing functions will go here
//Redirect URI: http://localhost:8888/callback

const clientSecret = '8e248345498646798523d0a0c65a652f';
const clientID = '34e7f94cb9ed410b879620808babd55e'; //we should find a way to hide this.
const base64ID = 'MzRlN2Y5NGNiOWVkNDEwYjg3OTYyMDgwOGJhYmQ1NWU=';
const base64Secret = 'OGUyNDgzNDU0OTg2NDY3OTg1MjNkMGEwYzY1YTY1MmY=';
const redirectURI = 'http:/localhost:3000';
const encodedClient = btoa(`${clientID}:${clientSecret}`);

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
      let tokenResponse = await fetch(
        `https://accounts.spotify.com/api/token`,
        {
          headers: {
            Authorization: `Basic ${encodedClient}`,
          },
          method: 'POST',
          body: JSON.stringify({ grant_type: 'client_credentials' }),
        }
      );
      let tokenJSON = await tokenResponse.json();
      accessToken = tokenJSON.access_token;
      expiresIn = tokenJSON.expires_in;
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    }
  },

  async getAlbum(albumID) {
    let response = await fetch(`https://api.spotify.com/v1/album/${albumID}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${this.getAccessToken()}` },
    });

    let responseJSON = await response.json();
    return responseJSON;
  },

  async play(track) {
    //logic for playing a selected track URI
  },

  async search(term) {
    //fetch() returns a promise of a query for the track we want.
    let response = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term.replace(
        ' ',
        '%20'
      )}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    //json() returns a promise with the original response formatted as a json object
    let jsonResponse = await response.json();
    //parse the json response using map() and return the formatted results
    if (!jsonResponse.tracks) return [];
    return jsonResponse.tracks.items.map((track) => {
      return {
        id: track.id,
        name: track.name,
        artists: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      };
    });
  },

  async savePlaylist(playlistName, trackURI) {
    //reject this function call if the playlist has no name, or if there are no tracks
    if (!playlistName || !trackURI.length || !trackURI) {
      return;
    }

    //accessToken is required to make requests to the Spotify server
    const accessToken = Spotify.getAccessToken();
    //We will provide the accessToken within the header of each request, including it in the Authorization field
    const headers = { Authorization: `Bearer ${accessToken}` };
    //Some variables to be filled in later
    //UID: user id for the person using the app, to be used for making playlists in their own name
    //playlistId: will be the id for the playlist that's created, so songs may be added to it
    let UID;
    let playlistId;

    //fetch() returns a promise of a query response
    let response = await fetch(`https://api.spotify.com/v1/me`, {
      headers: headers,
    });
    //json() returns a promise of the response formatted as a json object
    let jsonResponse = await response.json();
    UID = jsonResponse.id;

    //fetch() is being used to make a POST request for a new playlist
    let response2 = await fetch(
      `https://api.spotify.com/v1/users/${UID}/playlists`,
      {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ name: playlistName }),
      }
    );
    let jsonResponse2 = await response2.json();
    playlistId = jsonResponse2.id;

    //fetch() is being used to make a POST request for the tracks within the new playlist
    let response3 = await fetch(
      `https://api.spotify.com/v1/users/${UID}/playlists/${playlistId}/tracks`,
      {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ uris: trackURI }),
      }
    );
  },
};

Spotify.getAccessToken();
