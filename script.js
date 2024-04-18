/*
    Project 4
    Name: Devarsh Patel
    Date: 18th April 2024
    Description: Project 4 script.js  
	
 */

// Javascript for hamburger menu 
function toggleMenu() {
  var menu = document.getElementById("menu");
  var hamburger = document.querySelector(".hamburger");

  if (menu.style.display === "block") {
    menu.style.display = "none";
    hamburger.classList.remove("active");
  } else {
    menu.style.display = "block";
    hamburger.classList.add("active");
  }
}


// Javascript for image slider
let slideIndex = 0;

  function showSlides() {
    const slides = document.getElementsByClassName("foot");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds (3000ms)
  }

  // Start the slide show when the page loads
  window.onload = showSlides



