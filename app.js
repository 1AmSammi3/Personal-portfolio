let menu = document.querySelector(".menu");
let but = document.querySelector(".back");
let links = document.querySelectorAll(".link");
let ham = document.querySelector(".hamburger");

function show() {
   if (menu.classList.contains("active")) {
      menu.classList.remove("active");
   } else {
      menu.classList.add("active");
   }
}

function back() {
   if (menu.classList.contains("active")) {
      menu.classList.remove("active");
   }
}

for (let link of links) {
   link.addEventListener("click", back);
}

but.addEventListener("click", back);
ham.addEventListener("click", show);

