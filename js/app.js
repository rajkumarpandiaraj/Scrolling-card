const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const cards = document.querySelector('.cards');

function prevWindow(){
    cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100 ;

}
function nextWindow(){
    cards.scrollLeft = cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100 ;
}

prev.addEventListener('click', prevWindow);
next.addEventListener('click', nextWindow);