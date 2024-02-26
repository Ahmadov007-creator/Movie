let partMovies = movies.slice(280, 380)
let elMovList = document.querySelector('.movises_list')
let elSelCat = document.querySelector('.sel_category')
fnRendr(partMovies)


function fnRendr(data) {
  elMovList.innerHTML = ''
  data.forEach((item, index) => {
    let newLi = document.createElement('li')
    newLi.classList = 'movies_item'
    newLi.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title d-flex align-items-center justify-content-between">
      ${item.Title.toString().slice(0, 25)} <i onclick="fnLoveMovie('${item.ytid}')" class="bi bi-heart"></i></h5>
      <p class="card-text">${item.Categories.toString().slice(0, 30)}</p>
      <p class="card-text">${item.movie_year.toString().slice(0, 30)}</p>
      <h4 class="card-text">${item.imdb_rating}</h4>
      <a href="https://youtu.be/${item.ytid}" target="_blank" class="btn btn-warning">Watch movie</a>
    </div>
  </div>
    `
    elMovList.appendChild(newLi)
  });

}

function fnYear(value) {
  if (value == 'old') {
    fnRendr(partMovies.sort((a, b) => a.movie_year - b.movie_year));
  } else {
    fnRendr(partMovies.sort((a, b) => b.movie_year - a.movie_year));
  }
}

function fnRanting(value) {
  if (value == 'min') {
    fnRendr(partMovies.sort((a, b) => a.imdb_rating - b.imdb_rating));
  } else {
    fnRendr(partMovies.sort((a, b) => b.imdb_rating - a.imdb_rating));
  }
}

let arrCategory = []
partMovies.forEach((item) => {
  if (!arrCategory.includes(item.Categories)) {
    arrCategory.push(item.Categories)
  }
})

arrCategory.forEach(item => {
  let newOption = document.createElement('option')
  newOption.textContent = item
  newOption.value = item
  elSelCat.appendChild(newOption)
})


function fnCategory(value) {
  fnRendr(partMovies.filter((item) => item.Categories == value));
}

function movieSearch(e) {
  e.preventDefault()
  let mov = e.target.mov.value
  fnRendr(partMovies.filter((i) =>
    i.Title.toString().toLowerCase().includes(mov.toLowerCase()) &&
    i.Title.toString().toLowerCase()[0] == mov.toLowerCase()[0]))
}

function fnloveMovie(id){
  console.log(id);
}


// window.localStorage.clear()
// window.localStorage.removeItem('a')
// window.localStorage.setItem('b', '200')
// window.localStorage.setItem('a', '100')
// window.localStorage.getItem('b')
// console.log(window.localStorage.getItem('b'));