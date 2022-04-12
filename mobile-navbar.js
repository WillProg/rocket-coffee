const btnMobile = document.querySelector('.menu-open')

function toggleMenu() {
    const navList = document.querySelector('.nav-list')
    navList.classList.toggle('active')



    if(navList.classList.contains('active')){
        btnMobile.src = './img/menu-buguer-close.svg'
    }
    else {
        btnMobile.src = './img/menu-buguer-open.svg'
    }
}

btnMobile.addEventListener('click', toggleMenu)


//toggle adicione caso tenha, remova caso não tenha