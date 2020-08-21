// Get Artist Info: 
// By Name https://rest.bandsintown.com/artists/{{artist_name}}/?app_id=yOUrSuP3r3ven7aPp-id

//By ID https://rest.bandsintown.com/artists/id_{{artist_id}}/?app_id=yOUrSuP3r3ven7aPp-id


//Get Artist Events
//https://rest.bandsintown.com/artists/{{artist_name}}/events/?app_id=yOUrSuP3r3ven7aPp-id



export const Band = {
    async getEventList() {
      let fetchData = await fetch(`https://rest.bandsintown.com/artists/Locals%20Only%20Sound/events?app_id=${process.env.REACT_APP_BAND_API_KEY}&date=all`)
      let response = await fetchData.json()
      return response;
    }
}