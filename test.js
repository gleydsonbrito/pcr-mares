const url = 'https://open-weather13.p.rapidapi.com/city/recife';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5b155a0580msh3ab87547eb8f3cfp1f3b29jsnd9733114bb0a',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch(url, options)
  .then(res => res.json())
  .then(res => console.log(res))