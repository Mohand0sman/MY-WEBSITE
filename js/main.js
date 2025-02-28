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
