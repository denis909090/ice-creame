const cmdTop = document.querySelector(".scroll-to-top");

if (cmdTop) {
  cmdTop.addEventListener("click", click, false);
  cmdTop.addEventListener("touchend", click, false);
}

function click(event) {
  event.preventDefault();

  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("scroll", function () {
  if (!cmdTop) {
    return;
  }

  if (window.scrollY > 100) {
    cmdTop.classList.add("show");
  }
  else cmdTop.classList.remove("show");
});
