let show = document.querySelector('.show');
let hidden = document.querySelector('.hidden');
let navMedia = document.querySelector('.nav-media');
let navLinks = document.querySelectorAll('.nav-media ul li a');

// فتح القائمة
show.addEventListener('click', () => {
    navMedia.classList.add('active');
    document.body.style.overflow = 'hidden'; // لمنع التمرير عند فتح القائمة
});

// غلق القائمة
hidden.addEventListener('click', closeMenu);

// غلق القائمة عند الضغط على أي رابط
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

function closeMenu() {
    navMedia.classList.remove('active');
    document.body.style.overflow = 'auto'; // إرجاع التمرير
}


// فلتر عرض التطبيقات او الويب
function filterProjects(type, btn) {
    let cards = document.querySelectorAll('.swaper-c');
    let buttons = document.querySelectorAll('.tab-btn');
    
    buttons.forEach(button => button.classList.remove('activ'));
    btn.classList.add('activ');

    cards.forEach(card => {
        card.style.display = card.classList.contains(type) ? 'block' : 'none';
    });
}

// لتفعيل عرض مشاريع الويب كخيار افتراضي عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
    filterProjects('web', document.querySelector('.tab-btn.activ'));
});



// السوابر الخاص بالصور 

    // تفعيل Swiper لكل عنصر يحمل الكلاس mySwiper
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.mySwiper').forEach(function(swiperEl) {
            new Swiper(swiperEl, {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            // إذا أردت تفعيل Pagination داخل الكاردات
            // pagination: {
            //   el: swiperEl.querySelector('.swiper-pagination'),
            //   clickable: true,
            // },
            });
        });
        });


        // السواب الغير مستعمل
// const swiperEl = document.querySelector('swiper-container');
// const swiper = swiperEl.swiper;

// var appendNumber = 4;
// var prependNumber = 1;
// document
//   .querySelector(".prepend-2-slides")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.prependSlide([
//       '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>",
//       '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>",
//     ]);
//   });
// document
//   .querySelector(".prepend-slide")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.prependSlide(
//       '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>"
//     );
//   });
// document
//   .querySelector(".append-slide")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.appendSlide(
//       '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>"
//     );
//   });
// document
//   .querySelector(".append-2-slides")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.appendSlide([
//       '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>",
//       '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>",
//     ]);
//   });