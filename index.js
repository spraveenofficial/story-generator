
url = 'https://shortstories-api.herokuapp.com/'

function fetchData() {
    fetch(url)
    .then(response =>response.json())
.then(data => {
    const story = data.story
    console.log(story)
    document.querySelector('#data').innerHTML = story;
})
}

fetchData()