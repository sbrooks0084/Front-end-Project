const body = document.querySelector('body')
const movieCard = document.querySelector('#movieCard')

getShows()
function getShows() {
    const btn = document.getElementById('btn')
    btn.addEventListener('click', displayShows)
}

function displayShows() {
    let nameOfShow = showInput.type
    $.get(`https://api.tvmaze.com/singlesearch/shows?q=${showInput.type}`, function(data){
        console.log(data)
        //console.log(data.url)
        createDashboard(data)
        //createSearchBarDiv(data)
    })
}

function createDashboard(data) {
    const movieBoard = document.getElementById('movieBoard')
    movieBoard.innerText = data.summary
    movieCard.appendChild(movieBoard)
}

createSearchBarDiv()
function createSearchBarDiv() {
    let searchDiv = document.createElement('div')
    searchDiv.setAttribute('id', 'searchWrap')
    let showInput = document.createElement('input')
    showInput.setAttribute('id', 'searchBox')
    showInput.setAttribute('type', 'text')
    showInput.name = 'submit'
    showInput.setAttribute('placeholder', 'search show by keyword')
    //appendSearcBarToBody(data)
    let submitButton = document.createElement('button')
    submitButton.setAttribute('type', 'submit')
    submitButton.setAttribute('value', "Submit")
    submitButton.textContent = 'Get Show'
    submitButton.addEventListener('click', function(e) {
        console.log(e)
    })
    searchDiv.append(showInput)
    searchDiv.append(submitButton)
    body.prepend(searchDiv)    
  
}






