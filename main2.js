const API_KEY = 'ce2f8a0c1341cb0cf081ef2e2df670a2';
const IMG_URL = 'https://image.tmdb.org/t/p/original';

const ids = ['9007', '770635', '4347', '767', '672', '674', '12445', '671', '675', '673', '12444']

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
    regionSelect = document.getElementById('country'),
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



let n = 0;

form.addEventListener('submit', event => {
    event.preventDefault();

    let selects = {
        "region": regionSelect,
        "with_genres": genreSelect,
        "vote_count.gte": ratingSelect,
        "with_runtime.lte": durationSelect,
        "release_date.gte": yearSelect
    }

    //запрос
    sendRequest(createRequest(getSelected(selects)))

})

//функция запроса
function sendRequest(url) {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ru-RU${url}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        randomMovie(data);
        againBtn.onclick = function() {
            if(n < 19) {
                n++;
                imgRemove();
                randomMovie(data);
            } else {
                n = 0;
                imgRemove();
                randomMovie(data);
                //всплытие напоминалки
                messageShowUp();
                messageFadeOut();
            }      
        }
    });
}

//работаем с select 
function getSelected(selects) {
    for (key in selects) {
        let selectedElement = selects[key];
        if(selectedElement.selectedIndex > 0) {
            let selectedValue = selectedElement.options[selectedElement.selectedIndex].text;
            if(key === "with_genres") {
                selectedValue = genres[selectedValue];
            }
            selects[key] = selectedValue;
        }
        else{
            selectedValue = null;
            selects[key] = selectedValue;
        }
    }
    return selects;
}

//create request
function createRequest(selects) {
    let url = '';
    for(key in selects) {
        let selectedValue = selects[key];
        if (selectedValue) {
            url = url + `$${key}=${selectedValue}`
        }
    }
    return url;
}

//random elem from array
function randomMovie(responseContent) {
    const moviesList = responseContent.results;
    const movie = moviesList[Math.ceil(Math.random()*moviesList.length)];
    // movie = moviesList[n];
    createModal(movie);
}

//заполнение листа жанров 
function genreList(genreArray) {
    genresListM.innerHTML = '';
    genreArray.forEach((genre) => {
        for (const genreName in genres) {
            if (genres[genreName] === genre) {
                genre = genreName;
                let li = document.createElement('li');
                genresListM.appendChild(li);
                li.innerHTML = genre;
            }
        }
        
    })
}

//добавление картинки
function imgAdd(url) {
    let img = document.createElement('img');
    imageContent.appendChild(img);
    img.src = IMG_URL+url;
    img.classList.add('w-100');
    img.classList.add('movie-poster');
}

//заполнение окна
function createModal(movie) {
    imgAdd(movie.poster_path);
    genreList(movie.genre_ids);
    rateM.innerHTML = movie.vote_average;
    titleM.innerHTML = movie.title;
    releaseM.innerHTML = movie.release_date;
    descriptionM.innerHTML = movie.overview;
    modalOpen();
}

//message show up
function messageShowUp() {
    message.classList.remove('hide');
}

//плавное исчезновение 
function messageFadeOut() {
    message.addEventListener('click', event => {
        setTimeout(() => message.classList.add('opacity'), 1000);           
        
    })
}

//при нажатии на кнопку Поменять Фильтры
exitBtns.forEach( (exitBtn) => {
    exitBtn.addEventListener( 'click', () => {
        modalClose();
        message.classList.add('hide');
        imgRemove();
    }) 
})

//удаление картинки 
function imgRemove() {
    imageContent.removeChild(document.querySelector('.movie-poster'));
}

//открытие модального окна
function modalOpen() {
    modal.classList.remove("hide");
}

//закрытие модального окна
function modalClose() {
    modal.classList.add("hide");
}

