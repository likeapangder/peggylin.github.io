function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

function toggleDropdown() {
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("open");
}