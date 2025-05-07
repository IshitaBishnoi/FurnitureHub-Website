// Back to Top button behavior
const backToTop = document.getElementById("backToTop");

window.onscroll = () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Theme toggle
const toggleMode = document.getElementById("toggleMode");
toggleMode.onclick = () => {
  document.body.classList.toggle("dark");
  toggleMode.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
};

document.querySelectorAll(".carousel").forEach(carousel => {
    let images = carousel.querySelectorAll("img");
    let index = 0;
  
    images[index].classList.add("active");
  
    const showImage = (i) => {
      images.forEach(img => img.classList.remove("active"));
      images[i].classList.add("active");
    };
  
    carousel.querySelector(".prev").onclick = () => {
      index = (index - 1 + images.length) % images.length;
      showImage(index);
    };
  
    carousel.querySelector(".next").onclick = () => {
      index = (index + 1) % images.length;
      showImage(index);
    };
  });