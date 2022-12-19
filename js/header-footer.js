let coll = document.getElementsByClassName("collapsible");
let i;
let len = coll.length

for (i = 0; i < len; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        console.log(content)
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.borderBottom = null;

        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
    } else{
        menuMobile.classList.add('open');
    }
}

