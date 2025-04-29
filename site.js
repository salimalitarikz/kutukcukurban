fetch("nav.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("nav").innerHTML = data;

    let menu = document.getElementById("menu");
    let menuButton = document.getElementById("menuButton");
    let body = document.querySelector("body");

    menuButton.addEventListener("click", function () {
      menu.classList.toggle("active");
      menuButton.classList.toggle("active");
      body.classList.toggle("stopped");
      
    });
  });

fetch("footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

// Lenis örneği oluştur
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
