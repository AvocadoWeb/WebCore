(function () {
    'use strict';
    const breakpoint = window.matchMedia('(min-width:767px)');
    let swiper;
    const breakpointChecker = function () {

        if (breakpoint.matches === true) {
            if (swiper !== undefined) swiper.destroy(true, true);
            return;

        } else if (breakpoint.matches === false) {
            return enableSwiper();
        }
    };

    const enableSwiper = function () {
        swiper = new Swiper('.swiper', {
            slidesPerView: '1.3',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    };

    breakpoint.addListener(breakpointChecker);

    breakpointChecker();
})();

let showmore = document.querySelectorAll('.showmore');
more = document.querySelector(".more");
for (let i = 0; i < showmore.length; i++) {
    showmore[i].addEventListener('click', function () {
        showmore[i].parentNode.classList.toggle('active');
        if (more.textContent === 'Показать всё') {
            more.textContent = 'Скрыть';
        } else {
            more.textContent = 'Показать всё';
        }
    })
}

