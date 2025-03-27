// Optionally, you can add JavaScript for more interactive elements.
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for links
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(e.target.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
