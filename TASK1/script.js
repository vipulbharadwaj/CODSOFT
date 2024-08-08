document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn1');
    const sections = document.querySelectorAll('.content-section');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const contentId = button.getAttribute('data-content');

            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            sections.forEach(section => {
                section.style.display = 'none';
            });


            const activeSection = document.getElementById(contentId);
            if (activeSection) {
                activeSection.style.display = 'block';
            }
            button.classList.add('active');
        });
    });
});

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top <= offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
