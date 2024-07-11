// Location for a weather app

var location = {
    "city"      : "San Francisco",
    "state"     : "CA",
    "country"   : "US",
    "zip"       : "94101",
    "latitude"  : 37.775,
    "longitude" : -122.418,
    "elevation" : 47.000
  };
  
  var geolocation = {
    "city": "London",
    "state": "England",
    "country": "UK",
    "zip": "WC2N 5DB",
    "latitude": 51.5074,
    "longitude": -0.1278,
    "elevation": 11.000
  };
  
  var geolocation = {
    "city": "Tokyo",
    "state": "Tokyo Metropolis",
    "country": "Japan",
    "zip": "100-0001",
    "latitude": 35.6895,
    "longitude": 139.6917,
    "elevation": 32.000
  };
  
  var geolocation
   = {
    "city": "Rio de Janeiro",
    "state": "Rio de Janeiro",
    "country": "Brazil",
    "zip": "20000-000",  
    "latitude": -22.9085,
    "longitude": -43.1872,
    "elevation": 13.000
  };
  
  /* Further Adventures
   *
   * 1) Run the program
   *
   * 2) In the console tab, click after the blue arrow.
   *    Type location.city followed by Enter
   *    to show the city property.
   *
   * Hmmmm, something's not right!
   *
   * 3) Type location and press Enter
   *    to display the whole location object.
   *
   * Okay, that's definitely not our location object.
   *
   * This is an example of a variable collision.
   * Browsers (and jsBin) are programs themselves and
   * create their own variables.
   * Other code, not ours, has declared its own
   * location variable, over-writing ours.
   *
   * 4) Change our location variable, now calling
   *    it geolocation.
   *    Repeat steps 1, 2 and 3, using geolocation
   *    instead of location.
   *
   */