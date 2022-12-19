function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.mobile-menu-icon').src = "/js/quemSomos.js";
    } else{
        menuMobile.classList.add('open');
    }
}
