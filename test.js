const username='pcr_brito_gleydson'
const password='kL4r7CrDC6'
let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

const day = new Date()


fetch('https://login.meteomatics.com/api/v1/token', {
  method: 'GET', headers:headers,
})
  .then(res => res.json())
  .then(data => data.access_token)
  .then( token => {
    const endpoint = `https://api.meteomatics.com/${day.toISOString()}/t_2m:C,t_max_2m_24h:C,t_min_2m_24h:C,uv:idx,sunrise:sql,sunset:sql/-8.053967501715206,-34.87222573396811/json?access_token=${token}`
    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        const currentTemp = res.data[0].coordinates[0].dates[0].value
        const maxTemp = res.data[1].coordinates[0].dates[0].value
        const minTemp = res.data[2].coordinates[0].dates[0].value
        const uv = res.data[3].coordinates[0].dates[0].value
        const sunrise = res.data[4].coordinates[0].dates[0].value
        const sunset = res.data[5].coordinates[0].dates[0].value
      })
  })