// Установка title, для wp не понадобиться
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

let swiper1 = new Swiper(".swiper1", {
    slidesPerView: 3,
    spaceBetween: 20,

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
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});

let swiper6 = new Swiper(".swiper6", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper5,
    },
});

let swiper7 = new Swiper(".swiper7", {
    spaceBetween: 20,
    slidesPerView: 4,
});

let swiper8 = new Swiper(".swiper8", {
    slidesPerView: 3,
    spaceBetween: 20,

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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

tableHide.css('display', 'none')

for (let i = 0; i < tableBtn.length; i++) {
    tableBtn.eq(i).on("click", () => {
        for (let n = 0; n < tableBtn.length; n++) {
            tableBtn.eq(n).removeClass("active");
            tableTable.eq(n).removeClass("active");
        };

        tableBtn.eq(i).addClass("active");
        tableTable.eq(i).addClass("active");
        hideTr()
    });
};

function showTr() {
    tableTr.addClass('active')
    tableShow.css('display', 'none')
    tableHide.css('display', 'block')
}

function hideTr() {
    tableTr.removeClass('active')
    tableHide.css('display', 'none')
    tableShow.css('display', 'block')
}

tableShow.on('click', showTr)
tableHide.on('click', hideTr)

// табы для таблиц (конец)