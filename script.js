let sliderIndex = 0;
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const totalSlides = sliderItems.length;

function showNextSlide() {
    sliderIndex = (sliderIndex + 1) % totalSlides;
    sliderWrapper.style.transform = `translateX(-${sliderIndex * 100}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds

function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("show");
  }
  
  function toggleSubMenu(id) {
    var submenu = document.getElementById(id);
    var icon = document.getElementById(id + "Icon");
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
      icon.textContent = "+";
    } else {
      submenu.style.display = "block";
      icon.textContent = "-";
    }
  }
  
  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
  }

  function hideSidebar(){
       const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "none"
  }