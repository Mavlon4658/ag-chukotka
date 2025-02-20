const header = document.querySelector('.header');
const bars = document.querySelector('.header .bars')
const mobileMenu = document.querySelector('.mobile-menu');

function handleHeader () {
    if (window.scrollY > 120) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

handleHeader();

window.addEventListener('scroll', handleHeader)

bars.onclick = () => {
    bars.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        mobileMenu.classList.add('end-active');
        setTimeout(() => {
            mobileMenu.classList.remove('end-active');
        }, 400);
    } else {
        mobileMenu.classList.add('active');
    }
}

const langs = document.querySelector('.header .langs');

if (langs) {
    langs.querySelector('.langs-btn').onclick = () => {
        langs.classList.toggle('active');
    }

    const list = langs.querySelectorAll('.langs-list li')
    list.forEach(el => {
        el.onclick = () => {
            langs.classList.remove('active');
            langs.querySelector('.langs-btn input').value = el.textContent;
            langs.querySelector('.langs-btn span').textContent = el.textContent;
            list.forEach(item => {
                if (item == el) {
                    item.classList.add('selected');
                } else {
                    item.classList.remove('selected');
                }
            })
        }
    })
}

const tourChildSwp = new Swiper('.about-tour__swp .swp-child .swiper', {
    slidesPerView: 4,
    spaceBetween: 8,
    breakpoints: {
        1100: {
            spaceBetween: 16,
        },
        700: {
            spaceBetween: 14,
        }
    }
})

const tourParentSwp = new Swiper('.about-tour__swp .swp-parent .swiper', {
    slidesPerView: 1,
    // effect: 'fade',
    thumbs: {
        swiper: tourChildSwp,
    },
})

const programMoreBtn = document.querySelector('.program .more-btn');
const programCards = document.querySelector('.program-card__wrap');

if (programCards) {
    programMoreBtn.onclick = () => {
        programCards.classList.add('active');
        programMoreBtn.classList.add('hidden');
    }
}

document.addEventListener('click', function (event) {
    if (langs && !langs.contains(event.target)) {
        langs.classList.remove('active');
    }
})