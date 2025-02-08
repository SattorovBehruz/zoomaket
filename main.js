var elSiteHeader = document.querySelector(".js-header");
var elShowMenuBtn = elSiteHeader.querySelector(".js-show-menu-btn");

elShowMenuBtn.addEventListener("click", function(){
  
  document.body.classList.toggle("no-scroll");
  elSiteHeader.classList.toggle("show-menu");
  
});