let message = document.querySelector('#message');

const addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    let deleteBtn = document.createElement('button');
    
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);

    movieTitle.textContent = inputField.value;
    
    movieTitle.addEventListener('click', crossOffMovie);
    
    movie.appendChild(movieTitle);
    movie.appendChild(deleteBtn);
    document.querySelector('ul').appendChild(movie)
    inputField.value = '';
}

const deleteMovie = (event) => {
    event.target.parentNode.remove();
    message.textContent = event.target.previousSibling.textContent + `Movie Deleted!`
    revealMessage();
}

const formSubmit = document.querySelector(`form`)
formSubmit.addEventListener('submit', addMovie);


const crossOffMovie = (event) => {
    event.target.classList.toggle(`checked`)
    if(event.target.classList.contains('checked')){
        message.textContent = event.target.textContent + `Movie Watched!`
    }   
    else{
        message.textContent = event.target.textContent + `Movie added back!`
    }
    revealMessage();
}


const revealMessage = () => {
    message.classList.remove('hide');
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000);
}