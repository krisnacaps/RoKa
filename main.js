// event untuk tombol menubar
const bar = document.querySelector('.menubar');
const showMenu = document.querySelector('nav ul');

bar.addEventListener('click', function(){
    bar.classList.toggle('change');
    showMenu.classList.toggle('toggle');
})



// scroll to top
const myBtn = document.getElementById('btn-top');

window.onscroll = function() {
    scrollWindow()
}


function scrollWindow() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none"
    }
}

myBtn.addEventListener('click', function() {
    scrollTop();
})


function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

