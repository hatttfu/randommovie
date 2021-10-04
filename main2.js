const API_KEY = 'ce2f8a0c1341cb0cf081ef2e2df670a2';
const IMG_URL = 'https://image.tmdb.org/t/p/original';

const ids = ['9007', '770635', '4347', '767', '672', '674', '12445', '671', '675', '673', '12444', 367412, 203833, 32985, 4935, 5227, 4951, 86825, 10229, 254003, 109774, 71, 64765, 64122, 14202, 324786, 43949, 597219, 115, 237791, 561, 26371, 111014, 201085, 514684, 9293, 272693, 43818, 147009, 413806, 270303, 398818, 416144, 633787, 835598, 31165, 57212, 11774, 278, 731021, 839033, 2454, 13, 205596, 425274, 425274, 413576, 21028, 11324, 207933, 654974, 1271, 1904, 37165, 49051, 122917, 121, 120, 122, 10140, 2454, 158, 57158, 411];

//key for localstorage
// localStorage.clear()
// let i = 0;
// localStorage.setItem('key', i);

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
    many = document.querySelector('.many'),
    imageContent = document.querySelector('.image__content'),
    searchBtn = document.querySelector('.searchBtn'),
    againBtn = document.getElementById('againBtn'),
    exitBtn = document.querySelector('#exitBtn'),
    addBtn = document.querySelector('#addBtn'),
    favBtn = document.querySelector('.favBtn'),
    manyBtn = document.querySelector('.manyBtn'),
    openFav = document.querySelector('#openFav'),

    rateM = document.querySelector('.rate'),
    titleM = document.querySelector('.modal__title'),
    genresListM = document.querySelector('.genres-list'),
    regionM = document.querySelector('.region'),
    descriptionM = document.querySelector('.description'),
    releaseM = document.querySelector('.release-date'),

    genresBlock = document.querySelector('.genres__title'),
    reviewBlock = document.querySelector('.review'),

    favBlock = document.querySelector('.fav-movies'),
    favMenu = document.querySelector('.favourites');

let n = 0;

form.addEventListener('submit', event => {
    event.preventDefault();

    let selects = {
        "region": regionSelect,
        "with_genres": genreSelect,
        "vote_average.gte": ratingSelect,
        "with_runtime.lte": durationSelect,
        "release_date.gte": yearSelect
    }

    //запрос
    sendRequest(createRequest(getSelected(selects)))

})

//при нажатии на кнопку Поменять Фильтры
exitBtn.addEventListener( 'click', () => {
    imgRemove();
    modalClose();
    message.classList.add('hide');
}) 

//при нажатии на Сердечко
favBtn.addEventListener( 'click', () => {
    if(favMenu.classList.contains('fav-active')) {
        favMenu.classList.remove('fav-active');
        setTimeout(() => {
            favBtn.classList.remove('active');
        }, 600)
    } else {
        favMenu.classList.add('fav-active');
        favBtn.classList.add('active');
        //закрытие меню при нажатии извне
        document.addEventListener('click', event => {
            if(!event.target.closest('.favourites')) {
                favMenu.classList.remove('fav-active');
                setTimeout(() => {
                    favBtn.classList.remove('active');
                }, 600)
            }
        })
    }

    let removeBtns = document.querySelectorAll('.removeBtn');
    removeBtns.forEach(removeBtn => {
        removeBtn.addEventListener('click', (event) => {
            let movie = event.target.closest('.fav-movie');
            let id = movie.querySelector('.fav-id').textContent
            removeMovie(id);
            movie.classList.add('hide');
        })
    })
}) 

//функция запроса
function sendRequest(url) {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ru-RU${url}&page=${randomPage()}`)
    .then((response) => {
        console.log(url);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        randomMovie(data);
        againBtn.onclick = function() {
            imgRemove();
            addBtn.classList.remove('liked');
            addBtn.classList.remove('unclickable');
            if(n < 19) {
                n++;
                randomMovie(data);
            } 
            else if(n === 19) {
                n = 0;
                getAnotherPage();
                //всплытие напоминалки
                messageShowUp();
                manyBtn.addEventListener('click', () => {
                    messageFadeOut()
                })
            } 
        }
        //добавление фильма
        document.addEventListener('click', () => {
            if(localStorage.length == 11) {
                addBtn.classList.add('black');
                addBtn.setAttribute('title', "Вы уже добавили много фильмов")
            } else {
                addBtn.classList.remove('black');

            }
        })

        addBtn.addEventListener('click', () => {
            if(localStorage.length != 11) {
                addBtn.classList.add('liked');
            }
            addBtn.classList.add('unclickable');
            if(localStorage.length == 11) {
                addBtn.classList.add('unclickable');
                many.classList.remove('hide');
                openFav.addEventListener('click', () => {
                    many.classList.add('hide');
                    favMenu.classList.add('fav-active');
                    favBtn.classList.add('active')
                })
            }            
            for (let k = 1; k < 11; k++) {
                // console.log(k)
                if (localStorage.getItem(k) == undefined) {
                    localStorage.setItem('key', k);
                    // console.log(k);  
                    // console.log(data.results[n]);
                    // console.log(localStorage.getItem('key'));
                    localStorage.setItem(localStorage.getItem('key'), JSON.stringify( data.results[n]));
                    saveMovie(data.results[n]);
                    break;
                }
            }            
        })

    })
    .catch(err => {
        console.log(err);
        console.log('По каким-то причинам Ваш запрос не был отправлен, возможно присутствуют какие-то неполадки с интернетом, проверьте подключение, лох');
    })
}

//функция удаления сохраненного фильма
function removeMovie(id) {
    for( let i = 1; i < 11; i++) {
        if( localStorage.getItem(i)) {
            // console.log(localStorage.getItem(i))
            if (id == JSON.parse(localStorage.getItem(i)).id) {
                localStorage.removeItem(i);
            }
        }
    }
    
}

//random key
function saveMovie(lastMovie) {
    // console.log(lastMovie);
    let favMovie = document.createElement('div');
    favMovie.classList.add('fav-movie'); 
    favMovie.innerHTML = '<div class="fav-info"><div class="fav-poster"></div><div class="fav-id"></div><div class="fav-title"></div><div class="fav-data"></div><div class="fav-genres"></div></div><div class="fav-review"></div><button class="removeBtn btn mb-1 btn-success text-dark">Убрать из избранного</button>';
    favBlock.prepend(favMovie);
    document.querySelector('.fav-title').textContent = lastMovie.title;
    document.querySelector('.fav-data').textContent = lastMovie.vote_average + ', ' + lastMovie.release_date;
    // document.querySelector('.fav-genres').textContent = 
    // console.log(genreFav(lastMovie.genre_ids));
    // console.log(typeof(lastMovie.genre_ids));
    // console.log(lastMovie.genre_ids);
    let arr = [];
    let genreArray = lastMovie.genre_ids;
    genreArray.forEach((genre) => {
        // console.log(genre)
        for (const genreName in genres) {
            if (genres[genreName] === genre) {
                genre = genreName;
                // console.log(genre)
                arr.push(` ${genre}`)
            }
        }
    })

    document.querySelector('.fav-genres').textContent = arr;
    
    if(lastMovie.overview.length > 165) {
        lastMovie.overview = lastMovie.overview.substring(0,164)+"...";
    }
    document.querySelector('.fav-review').textContent = lastMovie.overview;
    document.querySelector('.fav-id').textContent = lastMovie.id;
    imgAdd(lastMovie.poster_path, document.querySelector('.fav-poster'))

}

//все фильмы в хранилище сразу в блок
function saveAllMovies() {
    for (let i = 1; i < 11; i++) {
        if(JSON.parse(localStorage.getItem(i))) {
            let movie = JSON.parse(localStorage.getItem(i));
            // console.log(movie);
            saveMovie(movie);
        }
        
    }
}

saveAllMovies();
 
//get another 20 movies 
function getAnotherPage() {
    let selects = {
        "region": regionSelect,
        "with_genres": genreSelect,
        "vote_average.gte": ratingSelect,
        "with_runtime.lte": durationSelect,
        "release_date.gte": yearSelect
    }

    //запрос
    sendRequest(createRequest(getSelected(selects)))
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
            if(key === "vote_average.gte") {
                selectedValue = parseFloat(selectedValue);
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
    // const movie = moviesList[Math.floor(Math.random()*moviesList.length)];
    movie = moviesList[n];
    createModal(movie);
}

//random elem from array
function randomPage() {
    const page = Math.floor(Math.random()*500);
    return page
}

//заполнение жанров для сайдбара 
// function genreFav(genreArray) {
//     let arr = [];
//     genreArray.forEach((genre) => {
//         // console.log(genre)
//         for (const genreName in genres) {
//             if (genres[genreName] === genre) {
//                 genre = genreName;
//                 // console.log(genre)
//                 arr.push(genre)
//             }
//         }
//     console.log(arr)
//     return arr;        
//     })
// }

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
function imgAdd(url, parent) {
    let img = document.createElement('img');
    parent.appendChild(img);
    img.src = IMG_URL+url;
    img.classList.add('w-100');
    img.classList.add('movie-poster');
}

//заполнение окна
function createModal(movie) {
    imgAdd(movie.poster_path, imageContent);
    if (movie.genre_ids) {
        genreList(movie.genre_ids);
        genresBlock.innerHTML = "Жанр:";        
    }
    rateM.innerHTML = movie.vote_average;
    ids.forEach(id => {
        if(id == movie.id) {
            titleM.innerHTML = movie.title + '  <i style="color: #ffc107" title="Одобрено Зарей!" class="fa fa-thumbs-up fa-1x" aria-hidden="true"></i>';
        }else {
            titleM.innerHTML = movie.title;
        }
    })
    releaseM.innerHTML = movie.release_date;
    if(movie.overview) {
        descriptionM.innerHTML = movie.overview;
        reviewBlock.innerHTML = "Обзор:"
    }
    for( i = 1; i < 11; i++) {
        if(movie.id == JSON.parse(localStorage.getItem(i))) {
            addBtn.classList.add('liked');
            addBtn.classList.add('unclickable');
        }
    }
    modalOpen();
}

//move added movie to saved ones 
function openSaved() {
    for (let j = 1; j < localStorage.length; j++) {
        

    }
}

//message show up
function messageShowUp() {
    message.classList.remove('hide');
}

//плавное исчезновение 
function messageFadeOut() {
    message.classList.add('hide');

    // message.addEventListener('click', event => {
    //     setTimeout(() => message.classList.add('opacity'), 1000);           
        
    // })
}

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

