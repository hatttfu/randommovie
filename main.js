const API_KEY = 'ce2f8a0c1341cb0cf081ef2e2df670a2';
const IMG_URL = 'https://image.tmdb.org/t/p/original';

//коды для жанров

const genres = { 
    'Action': 28,
    'Adventure': 12,
    'Animation': 16,
    'Comedy': 35,
    'Crime': 80,
    'Documentary': 99,
    'Drama': 18,
    'Family': 10751,
    'Fantasy': 14,
    'History': 36,
    'Horror': 27,
    'Music': 10402,
    'Mystery': 9648,
    'Romance': 10749,
    'Science Fiction': 78,
    'TV Movie': 10770,
    'Thriller': 53,
    'War': 10752,
    'Western': 37
}
    
//elements
const form = document.querySelector('.form'),
    genreSelect = document.getElementById('genre'),
    yearSelect = document.getElementById('year'),
    durationSelect = document.getElementById('duration'),
    countrySelect = document.getElementById('country'),
    ratingSelect = document.getElementById('rating'),
    modal = document.querySelector('.modal'),
    message = document.querySelector('.message'),
    imageContent = document.querySelector('.image__content'),
    searchBtn = document.querySelector('.searchBtn'),
    againBtn = document.getElementById('againBtn'),
    exitBtns = document.querySelectorAll('.exitBtn'),

    rateM = document.querySelector('.rate'),
    titleM = document.querySelector('.modal__title'),
    genresListM = document.querySelector('.genres-list'),
    regionM = document.querySelector('.region'),
    descriptionM = document.querySelector('.description'),
    releaseM = document.querySelector('.release-date');

form.addEventListener('submit', event => {
    event.preventDefault();
    const genreInput = genreSelect.options[genreSelect.selectedIndex].text;
    const genre = genres[genreInput];
    const year = yearSelect.options[yearSelect.selectedIndex].text;
    const region = countrySelect.options[countrySelect.selectedIndex].text;
    const duration = durationSelect.options[durationSelect.selectedIndex].text;
    const rating = ratingSelect.options[ratingSelect.selectedIndex].text;

    let n = 0;

    //запрос
    async function getResponse() {
        let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ru-RU&region=${region}&with_genres=${genre}&vote_count.gte=${rating}&with_runtime.lte=${duration}&release_date.gte=${year}`)
        let responseContent = await response.json()
        console.log(responseContent);

        // randomMovie(responseContent);
        //random elem from array

            const moviesList = responseContent.results;
            // const movie = moviesList[Math.ceil(Math.random()*moviesList.length)];
            movie = moviesList[n];
            
        
        //заполнение 
        imgAdd(movie.poster_path, movie.backdrop_path);
        // ImgAdd(movie.backdrop_path);
        rateM.innerHTML = movie.vote_average;
        titleM.innerHTML = movie.title;
        releaseM.innerHTML = movie.release_date;
        descriptionM.innerHTML = movie.overview;
        // descriptionM.innerHTML = movie.overview;
    }

    getResponse().then(modalOpen());

    //при нажатии НЕ ТО
    againBtn.onclick = function() {
        if(n < 19) {
            n++;
            getResponse().then(imgRemove());
        } else {
            n = 0;
            getResponse().then(imgRemove());
            //всплытие напоминалки
        }      
    }

    exitBtns.forEach( (exitBtn) => {
        exitBtn.addEventListener( 'click', () => {
            modalClose();
            message.classList.add('hide');
        }) 
    })

})

// //random elem from array
// function randomMovie(responseContent) {
//     const moviesList = responseContent.results;
//     // const movie = moviesList[Math.ceil(Math.random()*moviesList.length)];
//     movie = moviesList[n];
//     return movie;
// }

//добавление картинки
function imgAdd(url, backdrop) {
    let img = document.createElement('img');
    imageContent.appendChild(img);
    img.src = IMG_URL+url;
    img.dataset.backdrop = IMG_URL+backdrop;
    img.classList.add('w-100');
    img.classList.add('movie-poster');

    //смена картинки при наведении
    // const changeImage = event => {
    //     if(event.target.closest('img')) {
    //         if (backdrop) {
    //             [img.src, img.dataset.backdrop] = [img.dataset.backdrop, img.src]
    //         }
    //     }
    // }

    // img.addEventListener('mouseover', changeImage);
    // img.addEventListener('mouseout', changeImage);

}

//удаление картинки 
function imgRemove() {
    imageContent.removeChild(document.querySelector('.movie-poster'));
}

//открытие модального окна
function modalOpen() {
    imgRemove();
    modal.classList.remove("hide");
}

//закрытие модального окна
function modalClose() {
    modal.classList.add("hide");
}