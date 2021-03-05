
window.addEventListener("scroll", scroll);

function scroll() {
  if (document.documentElement.scrollTop > 0) {
    document.getElementById("header").classList.add("sticky_header");
    document.getElementById("header").classList.add("sticky_header");
    document.getElementById("navbar--link1").classList.add("navbar--link_sticky");
    document.getElementById("navbar--link2").classList.add("navbar--link_sticky");
    document.getElementById("navbar--link3").classList.add("navbar--link_sticky");
    document.getElementById("navbar--link4").classList.add("navbar--link_sticky");
    document.getElementById("navbar--link5").classList.add("navbar--link_sticky");
  } else {
    document.getElementById("header").classList.remove("sticky_header");
    document.getElementById("navbar--link1").classList.remove("navbar--link_sticky");
    document.getElementById("navbar--link2").classList.remove("navbar--link_sticky");
    document.getElementById("navbar--link3").classList.remove("navbar--link_sticky");
    document.getElementById("navbar--link4").classList.remove("navbar--link_sticky");
    document.getElementById("navbar--link5").classList.remove("navbar--link_sticky");

  }
}


// owl carousel

$(document).ready(function(){
  var owl = $('.owl-carousel');
owl.owlCarousel({
items:1,
loop:true,
nav:true,
margin:10,
autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:true
});
$('.play').on('click',function(){
owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
owl.trigger('stop.owl.autoplay')
})

});
