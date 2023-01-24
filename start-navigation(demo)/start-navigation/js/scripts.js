function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
     document.getElementById("hamburgerBtn").classList.toggle("close");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;