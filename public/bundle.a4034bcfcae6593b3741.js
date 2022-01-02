(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),i=r.n(t),o=r(645),a=r.n(o)()(i());a.push([n.id,"body {\r\n    overflow-x: hidden;\r\n    background: yellow !important;\r\n}\r\n\r\n.container {\r\n    max-width: 800px; \r\n}\r\n\r\nform {\r\n    height: 600px\r\n}\r\n\r\n.image__content {\r\n    width: 230px;\r\n}\r\n\r\n.overview {\r\n    padding-right: 35px;\r\n}\r\n\r\nselect {\r\n    background: transparent;\r\n}\r\n\r\nselect, .option {\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal {\r\n    position: fixed;\r\n    color: #fff;\r\n    top: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 990;\r\n    background-color: inherit;\r\n}\r\n\r\n.modal__content {\r\n    border: 2px solid yellow;\r\n    position: relative;\r\n\tmin-width: 750px;\r\n    min-height: 400px;\r\n    padding: 20px;\r\n    background-color: inherit;\r\n    font-size: 14px;\r\n    line-height: 1.2;\r\n    font-weight: 400;\r\n}\r\n\r\n.modal__content h2 {\r\n    font-size: 24px;\r\n    font-weight: 800;\r\n}\r\n\r\n.modal__content h3 {\r\n    font-size: 16px;\r\n    font-weight: 800;\r\n}\r\n\r\n.modal__description {\r\n\toverflow-y: auto;\r\n\tmax-height: 400px;\r\n    max-width: 480px;\r\n}\r\n\r\n.genres {\r\n    position: relative;\r\n}\r\n\r\n.rate {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n.message, .many {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    z-index: 1100;\r\n    background-color: inherit;\r\n}\r\n\r\n.message__content {\r\n    max-width: 450px;\r\n    border: 4px solid green;\r\n    padding: 10px 15px;\r\n    font-size: 20px;\r\n    background-color: inherit;\r\n}\r\n\r\n.opacity {\r\n    opacity: 0;\r\n    transition: opacity 1s ease-in;\r\n}\r\n\r\n.panel {\r\n    display: flex;\r\n    position: absolute;\r\n    right: 1px;\r\n    top: 0;\r\n}\r\n\r\n.panel-button {\r\n    text-align: center;\r\n    line-height: 35px;\r\n    border-radius: 5px;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n#addBtn {\r\n    cursor: pointer;\r\n}\r\n\r\n#addBtn:hover, .btn:hover {\r\n    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;\r\n    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;\r\n    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;\r\n}\r\n\r\n.zarya {\r\n    background-color: #ffc107;\r\n}\r\n\r\n.videoclub {\r\n    font-size: 12px;\r\n}\r\n\r\n.favourites {\r\n    position: absolute;\r\n    background: #212529;\r\n    top: 0;\r\n    right: -400px;\r\n    width: 440px;\r\n    min-height: 100vh;\r\n    border-left: 2px solid #dfe6e9;\r\n    z-index: 5000;\r\n    padding-left: 40px;\r\n    -webkit-transition: .5s right ease-in-out;\r\n    -o-transition: .5s right ease-in-out;\r\n    transition: .5s right ease-in-out;\r\n}\r\n\r\n.fav-active {\r\n    right: 0 !important;\r\n    padding-left: 0;\r\n    -webkit-transition: .5s ease-in-out;\r\n    -o-transition: .5s ease-in-out;\r\n    transition: .5s ease-in-out\r\n}\r\n\r\n.black {\r\n    color: #000;\r\n}\r\n\r\n.favBtn {\r\n    position: absolute;\r\n    top: 0;\r\n    border-radius: 0;\r\n    left: 0;\r\n    margin: 0 3px;\r\n}\r\n\r\n.active {\r\n    left: 400px;\r\n}\r\n\r\n.fav-movies {\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-right: 40px;\r\n}\r\n\r\n.fav-movie {\r\n    margin-left: 10px;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px solid #636e72;\r\n}\r\n\r\n.fav-title {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}\r\n\r\n.fav-data {\r\n    font-size: 12px;\r\n}\r\n\r\n.fav-genres {\r\n    font-size: 14px;\r\n    font-style: italic;\r\n}\r\n\r\n.fav-poster, .fav-id {\r\n    float: right;  \r\n    margin-left: 5px;\r\n}\r\n\r\n.fav-poster img{\r\n    width: 120px !important;\r\n}\r\n\r\n.fav-review {\r\n    font-size: 13px;\r\n    margin: 10px 0;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n.unclickable {\r\n    pointer-events: none !important;\r\n}\r\n\r\n.fav-id, .movie-id {\r\n    font-size: 10px;\r\n    font-style: italic;\r\n}\r\n\r\n#removeBtn {\r\n    height: 30px;\r\n    line-height: 30px;\r\n    padding: 0 5px;\r\n    background-color: #b2bec3;\r\n    border: 0;\r\n}\r\n\r\n.fa-heart:hover {\r\n    color: red;\r\n}\r\n\r\n.liked {\r\n    color: red;\r\n}\r\n\r\n.fa-star-o {\r\n    color: #ffc107;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    html, body {\r\n        max-width: 100% !important;\r\n        overflow-x: hidden !important;\r\n        position: static;\r\n        min-height: 1000px;\r\n    }\r\n    .modal {\r\n        flex-direction: column;\r\n        /* width: 600px; */\r\n        margin: 0 auto;\r\n        /* padding: 0; */\r\n    }\r\n    .modal__content {\r\n        min-width: 400px;\r\n        min-height: 100vh;\r\n        border-bottom: none;\r\n        font-size: 16px;\r\n    }\r\n    .genres-list {\r\n        font-size: 18px;\r\n        min-height: 30px;\r\n    }\r\n    .modal__content h2 {\r\n        font-size: 22px;\r\n    }\r\n    .poster__wrapper {\r\n        display: flex\r\n    }\r\n    .movie-info div {\r\n        margin-bottom: 10px;\r\n        margin-left: 10px;\r\n    }\r\n    .movie-info div {\r\n        text-align: left !important;\r\n    }\r\n    .panel{\r\n        right: 50px;\r\n    }\r\n    .poster img {\r\n        min-width: 170px;\r\n        max-width: 250px;\r\n        margin-right: 25px;\r\n    }\r\n    .favourites {\r\n        padding-left: 80px;\r\n    }\r\n    .message {\r\n        left: 40px;\r\n        transform: none;\r\n    }\r\n    .message__content {\r\n        max-width: 80vw;\r\n    }\r\n    .fixed-bottom {\r\n        display: none;\r\n    }\r\n    .favourites {\r\n        border: none\r\n    }\r\n}\r\n\r\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var f=r(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var v=i(u,t);t.byIndex=s,e.splice(s,0,{identifier:p,updater:v,references:1})}a.push(p)}return a}function i(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,i){var o=t(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=r(o[a]);e[s].references--}for(var c=t(n,i),l=0;l<o.length;l++){var d=r(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,i&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var i=e[t];if(void 0!==i)return i.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var t={};(()=>{r.d(t,{Jx:()=>M,vb:()=>X,yw:()=>D,yM:()=>P});var n=r(379),e=r.n(n),i=r(795),o=r.n(i),a=r(569),s=r.n(a),c=r(565),l=r.n(c),d=r(216),p=r.n(d),f=r(589),u=r.n(f),v=r(426),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),e()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals;const g={Action:28,Adventure:12,Animation:16,Comedy:35,Crime:80,Documentary:99,Drama:18,Family:10751,Fantasy:14,History:36,Horror:27,Music:10402,Mystery:9648,Romance:10749,"Science Fiction":78,"TV Movie":10770,Thriller:53,War:10752,Western:37};let h={with_genres:27,"release_date.gte":2020,"with_runtime.lte":90,"vote_average.gte":8};function x(n){for(let e in g)if(e==n)return g[e]}function y(n){for(let e in g)if(g[e]==n)return e}function b(n){const e=w();e.push(n),localStorage.setItem("movies",JSON.stringify(e))}function w(){return JSON.parse(localStorage.getItem("movies")||"[]")}const _=[9007,770635,4347,767,672,674,12445,671,675,673,12444,367412,203833,32985,4935,5227,4951,86825,10229,254003,109774,71,64765,64122,14202,324786,43949,597219,115,237791,561,26371,111014,201085,514684,9293,272693,43818,147009,413806,270303,398818,416144,633787,835598,31165,57212,11774,278,731021,839033,2454,13,205596,425274,425274,413576,21028,11324,207933,654974,1271,1904,37165,49051,122917,121,120,122,10140,2454,158,57158,411,50646,1267],k="https://image.tmdb.org/t/p/original";function L(n,e){X.addBtn.classList.remove("liked"),addBtn.classList.remove("unclickable"),X.img.src=`${k}${n[e].poster_path}`,X.description.innerHTML=n[e].overview,X.title.innerHTML=n[e].title=B(n[e]),X.date.innerHTML=n[e].release_date,X.rating.innerHTML='<i class="fa fa-star-o" aria-hidden="true"></i>'+n[e].vote_average,X.movieId.innerHTML=n[e].id,w().forEach((r=>{r.id==n[e].id&&X.addBtn.classList.add("liked")})),X.genres.innerHTML=function(n){let e=n.map((n=>y(n)));return e=e.filter((n=>null!=n)),e.map((n=>`<li>${n}</li>`)).join("")}(n[e].genre_ids)}function S(n){return`\n        <div class="fav-movie">\n            <div class="fav-info">\n                <div class="fav-poster">\n                    <img src="${k}${n.poster_path}"></img>\n                </div>\n                <div class="fav-id">\n                    ${n.id}\n                </div>\n                <div class="fav-title">\n                    ${B(n)}\n                </div>\n                <div class="fav-data">\n                    ${n.vote_average}, ${n.release_date}\n                </div>\n                <div class="fav-genres">\n                    ${function(n){let e=[];return n.forEach((n=>{e.push(y(n))})),e.join(", ")}(n.genre_ids)}\n                </div>\n            </div>\n            <div class="fav-review">\n                ${n.overview.length>165?n.overview.substring(0,164)+"...":n.overview}}\n            </div>\n            <button class="removeBtn btn mb-1 btn-success text-dark">Убрать из избранного</button>\n        </div>\n    `}function B(n){let e=_.filter((e=>n.id==e));return console.log(e),e.length?n.title+'  <i style="color: #ffc107" title="Одобрено Зарей!" class="fa fa-thumbs-up fa-1x" aria-hidden="true"></i>':n.title}const M="https://api.themoviedb.org/3/discover/movie?api_key=ce2f8a0c1341cb0cf081ef2e2df670a2&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false",T=document.getElementById("searchBtn"),$=document.getElementById("addBtn"),q=document.querySelector(".favBtn"),z=document.querySelector(".fav-movies"),E=document.querySelector(".favourites"),I=document.querySelector(".modal"),H=I.querySelector(".image__content"),C=I.querySelector(".rate"),j=I.querySelector(".release-date"),N=I.querySelector(".modal__title"),A=I.querySelector(".genres-list"),O=I.querySelector(".description"),F=I.querySelector("#againBtn"),J=I.querySelector("#exitBtn"),Z=I.querySelector(".movie-id"),D=document.querySelector(".message"),P=D.querySelector(".message-text"),R=D.querySelector(".manyBtn");let U=0,W={with_genres:document.getElementById("genre"),"release_date.gte":document.getElementById("year"),"with_runtime.lte":document.getElementById("duration"),"vote_average.gte":document.getElementById("rating")},V=[],X={modal:I,img:H,rating:C,date:j,title:N,genres:A,description:O,againBtn:F,exitBtn:J,addBtn:$,movieId:Z};function G(){var n,e;(n=function(n){let e="";for(let r in n)n[r]&&(e+=`&${r}=${n[r]}`,console.log(e));return e}(function(n){for(let e in n){let r=n[e].options[n[e].selectedIndex].text;n[e].selectedIndex?"with_genres"==e?(r=x(r),h[e]=r):h[e]=r:h[e]=0}return h}(W)),e=Math.floor(150*Math.random()),fetch(`${M}${n}&page=${e}\n    `).then((n=>n.json())).then((e=>e.results.length?e.results.filter((n=>n.overview)):function(n){return fetch(`${M}${n}&page=1`).then((n=>n.json())).then((n=>{let e=n.results.filter((n=>n.overview));return P.innerHTML=`По вашему запросу нашлось фильмов: ${e.length}. Кажется, стоит поменять фильтры`,D.classList.remove("hide"),e})).catch((n=>{alert(`По каким то причинам запрос не был отправлен. Проверь подключение к сети, лох: ${n}`)}))}(n))).catch((n=>{alert(`По каким то причинам запрос не был отправлен. Проверь подключение к сети, лох: ${n}`)}))).then((n=>{V=n,V.length?(L(V,0),console.log(V),X.modal.classList.remove("hide"),$.onclick=()=>{$.classList.add("unclickable","liked"),b(V[0])}):(P.innerHTML="Кажется, по вашему запросу ничего не нашлось. Нажмите еще раз или поменяйте фильтры",D.classList.remove("hide"))}))}function K(n){let e=n.map(S).join("");z.innerHTML=e}T.addEventListener("click",(function(n){n.preventDefault(),G()})),F.addEventListener("click",(function(){U++,U<V.length?(L(V,U),$.onclick=()=>{$.classList.add("unclickable","liked"),b(V[U])}):(U=0,G())})),z.addEventListener("click",(function(n){if(n.target.closest(".removeBtn")){let e=n.target.closest(".fav-movie"),r=Number(e.querySelector(".fav-id").textContent);!function(n){let e=w();e=e.filter((e=>e.id!=n)),function(n){localStorage.setItem("movies",JSON.stringify(n))}(e),K(w())}(r),r==Number(document.querySelector(".movie-id").textContent)&&$.classList.remove("unclickable","liked")}})),J.onclick=()=>{X.modal.classList.add("hide"),D.classList.add("hide")},R.onclick=()=>{D.classList.add("hide")},q.addEventListener("click",(()=>{E.classList.contains("fav-active")?(E.classList.remove("fav-active"),setTimeout((()=>{q.classList.remove("active")}),600)):(K(w()),E.classList.add("fav-active"),q.classList.add("active"),document.addEventListener("click",(n=>{n.target.closest(".favourites")||n.target.closest(".fav-movie")||(E.classList.remove("fav-active"),setTimeout((()=>{q.classList.remove("active")}),600))})))}))})()})();