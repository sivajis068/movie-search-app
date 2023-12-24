const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ff6587ca2208ad667ec2ed14b5be92d9&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=ff6587ca2208ad667ec2ed14b5be92d9&query=";


const main = document.querySelector('#section');
const form_search = document.querySelector('#form');
const search = document.querySelector('#query');


returnMovie(APILINK);
function returnMovie(url) {
    fetch(url).then(res => res.json())
        .then(function (data) {
            console.log(data.results);
            data.results.forEach(element => {
                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card');

                const div_row = document.createElement('div');
                div_row.setAttribute('class', 'row');

                const div_column = document.createElement('div');
                div_column.setAttribute('class', 'column');

                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail');
                image.setAttribute('id', 'image');

                const title = document.createElement('h3');
                title.setAttribute('id', 'title');

                const center = document.createElement('center');


                title.innerHTML = `${element.title}`;
                image.src = IMG_PATH + element.poster_path;
                center.appendChild(image);
                div_card.appendChild(center);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);

                main.appendChild(div_row);
            });
        });
}


form_search.addEventListener("submit", function (e) {
    e.preventDefault();
    main.innerHTML = "";

    const search_item = search.value;

    if (search_item) {
        returnMovie(SEARCHAPI + search_item)
        search.value = '';
    }
})