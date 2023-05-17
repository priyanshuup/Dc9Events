function createBubble() {
    const section = document.getElementById('bubblepage')
    const createElement = document.createElement('span')
    var size = Math.random() * 100;
    console.log(size)
    createElement.style.width = 10 + size + 'px';
    createElement.style.height = 10 + size + 'px';
    createElement.style.left = Math.random() * innerWidth + "px";
    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     console.log(bgColor);
      
     createElement.style.backgroundColor =bgColor

        }
    
    random_bg_color();

    const app = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    console.log(app(19, 25));
    createElement.style.top = app(10,1200) + "px"
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    }, 10000)
}
setInterval(createBubble,250)

// <!-- Initialize Swiper -->
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints:{
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        },
      },
    });


const navbtnmob = document.querySelector(".navbtnmob")
const hometext = document.querySelector(".hometext")
const frstline = document.querySelector(".fstline")
const scndline = document.querySelector(".scndline")
const thrdline = document.querySelector(".thrdline")
const navbarcontmob = document.querySelector(".navbarcontmob")

var flag = 0;
navbtnmob.addEventListener("click", function(){
    if (flag==0){
        hometext.style.display = "none";
        frstline.style.display = "none";
        scndline.style.transform = "rotate(45deg)"
        thrdline.style.transform = "rotate(-45deg) translateY(-10px) translateX(10px)"
        navbarcontmob.style.left = "50%"
        flag = 1
    }
    else{
        hometext.style.display = "block";
        hometext.style.display = "block";
        frstline.style.display = "block";
        scndline.style.transform = "rotate(0deg)";
        thrdline.style.transform = "rotate(0deg) translateY(0px) translateX(0px)"
        navbarcontmob.style.left = "-100%"
        flag = 0
    }    
})