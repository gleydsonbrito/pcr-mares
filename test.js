const lat = 60.936;
const lng = 5.114;

fetch(`https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${lng}&start=2023-12-11&end=2023-12-11`, {
  headers: {
    'Authorization': '4e85d9ca-983b-11ee-b7a8-0242ac130002-4e85da2e-983b-11ee-b7a8-0242ac130002'
  }
}).then((response) => response.json()).then((jsonData) => {
    console.log(jsonData)
});
