const movieForm = document.getElementById('movieForm');

movieForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let movieUrl = document.getElementById('movieUrl').value;
    let movieName = document.getElementById('movieName').value;

    // Creating the elements

    let movieCard = document.createElement('div');
    movieCard.className = 'movieCard';

    let movieImage = document.createElement('img');
    movieImage.src = movieUrl;

    let movieTitle = document.createElement('h3');
    movieTitle.textContent = "Title: " + movieName;

    let deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-times deleteIcon';
    deleteIcon.addEventListener('click', () => {
        movieCard.remove();
    });

    // Appending all the elements

    movieCard.appendChild(movieImage);
    movieCard.appendChild(deleteIcon);
    movieCard.appendChild(movieTitle);

    document.getElementById('movieContainer').appendChild(movieCard);

    // Clear the form inputs
    document.getElementById('movieForm').reset();
});
