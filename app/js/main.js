// Установка title !!! ДЛЯ CMS НЕ ПОНАДОБИТЬСЯ (начало)
if (document.location.pathname === '/') { document.title = 'Главная' };
if (document.location.pathname === '/start.html') { document.title = 'С чего начать?' };
if (document.location.pathname === '/404.html') { document.title = 'Страница не найдена' };
if (document.location.pathname === '/terms.html') { document.title = 'Условия торговли' };
if (document.location.pathname === '/terms-of-trade.html') { document.title = 'Условия торговли' };
if (document.location.pathname === '/platform.html') { document.title = 'Торговая платформа' };
if (document.location.pathname === '/strategies.html') { document.title = 'Торговые стратегии' };
if (document.location.pathname === '/schedule.html') { document.title = 'Часы работы рынка' };
if (document.location.pathname === '/analytics.html') { document.title = 'Аналитика рынка' };
if (document.location.pathname === '/review.html') { document.title = 'Обзор рынка' };
if (document.location.pathname === '/condition.html') { document.title = 'Состояние рынка' };
if (document.location.pathname === '/calendar.html') { document.title = 'Экономический календарь' };
if (document.location.pathname === '/news.html') { document.title = 'Новости рынка' };
if (document.location.pathname === '/forecasts.html') { document.title = 'Прогнозы рынка' };
if (document.location.pathname === '/currencies.html') { document.title = 'Валюты' };
if (document.location.pathname === '/cryptocurrencies.html') { document.title = 'Криптовалюты' };
if (document.location.pathname === '/stocks.html') { document.title = 'Акции' };
if (document.location.pathname === '/ies.html') { document.title = 'Индексы' };
if (document.location.pathname === '/raw-materials.html') { document.title = 'Сырье' };
if (document.location.pathname === '/history.html') { document.title = 'История компании' };
if (document.location.pathname === '/why.html') { document.title = 'Почему мы?' };
if (document.location.pathname === '/documents.html') { document.title = 'Документы' };
if (document.location.pathname === '/about.html') { document.title = 'О Patronus Investments' };
if (document.location.pathname === '/contacts.html') { document.title = 'Контакты' };

// Установка title (конец)

// кнопка вверх (начало)

$(window).on('scroll', trackScroll);
$('.upButton').on('click', backToTop);

function trackScroll() {
    let scrolled = window.pageYOffset;

    if (scrolled > 100) {
        $('.upButton').addClass('show');
    };
    if (scrolled < 100) {
        $('.upButton').removeClass('show');
    };
};

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// кнопка вверх (конец)

let swiper1 = new Swiper(".swiper1", {
    spaceBetween: 20,
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let swiper5 = new Swiper(".swiper5", {
    freeMode: true,
    watchSlidesProgress: true,
    slidesPerView: 1.7,
    spaceBetween: 10,

    breakpoints: {
        500: {
            slidesPerView: 2.2,
            spaceBetween: 10,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

let swiper6 = new Swiper(".swiper6", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper5,
    },
});

let swiper7 = new Swiper(".swiper7", {
    spaceBetween: 20,

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    },

    pagination: {
        el: '.swiper-pagination',
    },
});

let swiper8 = new Swiper(".swiper8", {
    spaceBetween: 20,

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper9 = new Swiper(".swiper9", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    speed: 2000,
    autoplay: {
        delay: 0,
    },
    loop: true,
    allowTouchMove: false,
});

let swiper10 = new Swiper(".swiper10", {
    spaceBetween: 20,
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
    },
});

$(document).ready(function () {
    $('.strategy-accordion > li > .answer').hide();

    $('.strategy-accordion > li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".strategy-accordion > li.active .answer").slideUp();
            $(".strategy-accordion > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });
});

$(document).ready(function () {
    $('.faq-accordion > li > .answer').hide();

    $('.faq-accordion > li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".faq-accordion > li.active .answer").slideUp();
            $(".faq-accordion > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });
});

// табы для таблиц (начало)
let tableBtn = $(".start-instruments__btn");
let tableTable = $(".start-instruments__table");
let tableShow = $(".start-instruments__show");
let tableHide = $(".start-instruments__hide");
let tableTr = $(".start-instruments__table tr");

tableHide.css('display', 'none');

for (let i = 0; i < tableBtn.length; i++) {
    tableBtn.eq(i).on("click", () => {
        for (let n = 0; n < tableBtn.length; n++) {
            tableBtn.eq(n).removeClass("active");
            tableTable.eq(n).removeClass("active");
        };

        tableBtn.eq(i).addClass("active");
        tableTable.eq(i).addClass("active");
        hideTr();
    });
};

function showTr() {
    tableTr.addClass('active');
    tableShow.css('display', 'none');
    tableHide.css('display', 'flex');
};

function hideTr() {
    tableTr.removeClass('active');
    tableHide.css('display', 'none');
    tableShow.css('display', 'flex');

    $("body, html").animate({
        scrollTop: $('.start-instruments').offset().top
    }, 600);
};

tableShow.on('click', showTr);
tableHide.on('click', hideTr);

// табы для таблиц (конец)

// мобильное меню (начало)

let menuItem = $('.header .menu > .menu-item');
let subMenu = $('.header .menu > .menu-item .sub-menu');

$(window).on('resize', headerMobileUsability)

function headerMobileUsability() {
    console.log('headerMobileUsability')

    if ($(window).width() <= 1024) {

        $('.header__burger').on('click', function () {
            $('.header__burger').toggleClass('active');
            $('.header__box').toggleClass('active');
            $('.header .menu').toggleClass('active');

            subMenu.slideUp();
            menuItem.removeClass('active');
        })

        $('.upButton').on('click', function () {
            $('.upButton').on('click', function () {
                $('.header__burger').removeClass('active');
                $('.header__box').removeClass('active');
                $('.header .menu').removeClass('active');

                subMenu.slideUp();
                menuItem.removeClass('active');
            });
        });
        for (let i = 0; i < menuItem.length; i++) {
            menuItem.eq(i).on('click', function () {

                if (menuItem.eq(i).hasClass('active')) {

                    menuItem.eq(i).removeClass('active');
                    subMenu.eq(i).slideUp();

                } else {
                    subMenu.slideUp();
                    menuItem.removeClass('active');

                    subMenu.eq(i).slideDown();
                    menuItem.eq(i).addClass('active');
                };
            });
        };
    } else {
        $('.header__burger').removeClass('active');
        $('.header__box').removeClass('active');
        $('.header .menu').removeClass('active');

        subMenu.slideDown();
        menuItem.removeClass('active');
    }
};

headerMobileUsability();
// мобильное меню (конец)

// Помещение всех таблиц в div (начало)
document.addEventListener('DOMContentLoaded', () => {
    for (let table of document.getElementsByTagName("table")) {
        let tableOverflow = document.createElement("div");
        tableOverflow.className = "table-overflow";
        table.parentElement.replaceChild(tableOverflow, table);
        tableOverflow.appendChild(table);
    };
});
// Помещение всех таблиц в div (конец)