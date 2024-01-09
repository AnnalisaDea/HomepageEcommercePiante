var nuovoTesto = document.querySelector('#DueColonne');
var buttonMore = document.querySelector('#ButtonMore');


function toggleReadMore() {
    if (nuovoTesto.style.display === 'none' || nuovoTesto.style.display === '') {
        nuovoTesto.style.display = 'block';
        buttonMore.textContent = 'Read less';
    } else {
        nuovoTesto.style.display = 'none';
        buttonMore.textContent = 'Read more';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    buttonMore.addEventListener('click', toggleReadMore)
})