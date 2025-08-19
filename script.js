function scrollToChoosePlan(){
    document.getElementsByClassName("choosePlan")[0].scrollIntoView({behavior:"smooth"});
}
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.2 }); // triggers when 20% of element is visible
  
    reveals.forEach(el => observer.observe(el));
  });
  