
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "light mode.png";
    }
    else {
        icon.src = "dark mode.png";
    }
}

let count = 0;
document.getElementById("count").onclick = function () {
    count++;
    document.getElementById("counter").textContent = count;
}
document.querySelector('.contactform form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting me!');
});


let scrollBtn = document.getElementById("scrollTopBtn");
if (scrollBtn) {
    window.addEventListener("scroll",  function () {
        scrollBtn.style.display = (window.scrollY > 200) ? "block" : "none";
    });
    scrollBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}