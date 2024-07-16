function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.body.style.overflow = "hidden";
}
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.body.style.overflow = "auto";
}

function checkScreenWidth() {
  (window.innerWidth >= 900) ? closeNav() : 0;
}

window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);