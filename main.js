const navlisth4 = document.querySelectorAll(".nav-list h4");

navlisth4.forEach(navlisth4 => {
    navlisth4.addEventListener("click", e => {
        navlisth4.classList.toggle("active");
    });
});

const menu = document.querySelectorAll(".nav-menu");
menu.forEach(menu =>{
    menu.addEventListener("click", e => {
        menu.classList.toggle("active");
    });
});
// function bar () {
//     document.querySelectorAll(".nav-menu").classList.toggle("active");
// }
const navBar = document.querySelectorAll(".nav-bar");
navBar.forEach(navBar => {
    navBar.addEventListener("scroll", e => {
        navBar.classList.toggle("sticky")
    });
});
window.addEventListener('scroll', () => {
    const scolled = window.scrollY;

    if (scolled === 370) {
        document.getElementsByClassName(".nav-menu").style.position == ("sticky");
    }

    console.log(scolled);
})
