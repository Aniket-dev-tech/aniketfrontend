// var main = document.querySelector("#main");
var cursor = document.querySelector("#mini-cursor");
var description_h1 = document.querySelector(".varHeading");
var description_h3 = document.querySelector(".varSubHeading");
var description_p = document.querySelector(".varPara");
var image = document.querySelector("#profile");

var logo_style = document.querySelector("#logo");

// EVENT LISTNERS

// window.addEventListener("mousemove", function (dets) {
//     cursor.style.left = dets.x + "px"
//     cursor.style.top = dets.y + "px"
// });
// main.addEventListener("mouseenter",function(){
//     cursor.style.transform = "scale(1)"
// })
// main.addEventListener("mouseleave",function(){
//     cursor.style.transform = "scale(0)"
// })
// window.addEventListener("scroll",function(){

// })


// ADD LOADER 

var loader = document.querySelector(".loader");
setTimeout(() => {
  loader.style.display = "none";
}, 3000);






// MAKING THE HAMBURGER menu 
var hamburger = document.querySelector(".ri-menu-line");
var nav_list = document.querySelector("#nav_list");
var right_arrow = document.querySelector(".ri-arrow-right-s-line")
var main = document.querySelector("#main")
var container = document.querySelector("#container")
var contact_container = document.querySelector("#contact-container")
hamburger.addEventListener("click", function () {
  nav_list.style.transform = "translateX(0%)";
  right_arrow.addEventListener("click", function () {
    nav_list.style.transform = "translateX(107%)"
  })
  main.addEventListener("click", function () {
    nav_list.style.transform = "translateX(107%)"
  })
  container.addEventListener("click", function () {
    nav_list.style.transform = "translateX(107%)"
  })
  contact_container.addEventListener("click", function () {
    nav_list.style.transform = "translateX(107%)"
  })
})



////////////////////////////////
description_h1.addEventListener("mouseenter", function () {
  description_h1.style.fontSize = "40px"
  document.querySelector(".fire").style.display = "inline"
}
)
description_h1.addEventListener("mouseleave", function () {
  description_h1.style.fontSize = "34px"
  document.querySelector(".fire").style.display = "none"

}
)
description_h3.addEventListener("mouseenter", function () {
  description_h3.style.fontSize = "24px"
  document.querySelector(".orange").style.opacity = "1"
}
)
description_h3.addEventListener("mouseleave", function () {
  description_h3.style.fontSize = "18px"
  document.querySelector(".orange").style.opacity = "0"
}
)

logo_style.addEventListener("mouseenter", function () {
  document.querySelector(".after").style.opacity = "1"
})
logo_style.addEventListener("mouseleave", function () {
  document.querySelector(".after").style.opacity = "0"
})




ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false
});

ScrollReveal().reveal(".scaleUp", {
  duration: 700,
  scale: 0.85
});




