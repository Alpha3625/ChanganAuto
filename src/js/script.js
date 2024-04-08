function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function checkScreenWidth() {
  (window.innerWidth >= 900) ? closeNav() : 0;
}

window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);