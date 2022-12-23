let myBtn = document.querySelector('.totop');
myBtn.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("scroll", (event) => {
    if(window.scrollY >= 700){
        document.querySelector('.totop').style.display = "block"
    }else{
        document.querySelector('.totop').style.display = "none"
    }
});

let a1 = document.querySelector('.a1');
a1.addEventListener('click', function(){
    console.log("left")
})

let a2= document.querySelector('.a2');
a2.addEventListener('click', function(){
    console.log("right")
})