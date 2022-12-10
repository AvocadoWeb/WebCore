const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',

        clickable: true,
    },
});

let showmore = document.querySelectorAll('.showmore');
for (let i = 0; i < showmore.length; i++) {
    showmore[i].addEventListener('click', function () {
        showmore[i].parentNode.classList.toggle('active')
    })
}

