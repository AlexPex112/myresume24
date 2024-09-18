// Scroll to top button
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "↑";
scrollToTopBtn.setAttribute("id", "scrollToTop");
scrollToTopBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
`;
document.body.appendChild(scrollToTopBtn);

// Show or hide the button on scroll
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to top function
scrollToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '2';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 500);  // Wait for the transition to finish
});