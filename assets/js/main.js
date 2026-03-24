const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const yearTarget = document.getElementById("year");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("hidden") === false;

    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
