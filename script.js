
const toggle = document.getElementById("themeToggle");
const upload = document.getElementById("imageUpload");
const profileImage = document.getElementById("profileImage");


toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
});


const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
};

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});
upload.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            profileImage.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    }
});