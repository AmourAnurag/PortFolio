const languages = [
  "fa-brands fa-java",
  "fa-brands fa-python",
  "fa-brands fa-html5",
  "fa-brands fa-css3-alt",
  "fa-brands fa-square-js",
  "fa-brands fa-bootstrap",
  "fa-brands fa-react",
  "fa-brands fa-git-alt",
  "fa-brands fa-github",
  "fa-brands fa-node",
  "fa-solid fa-database",
];
let container = document.getElementById("skill-container");
let html = ""; // Initialize an empty string to store HTML content
for (let index = 0; index < languages.length; index++) {
  // Concatenate HTML for each div in each iteration
  html += `<div class="languages scroll-bottom">
    <i class='${languages[index]}'></i>
  </div>`;
}
container.innerHTML = html;
//adding skills end

let words = document.querySelectorAll(".word");

words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter-out";
    }, i * 90);
  });
  nextWord.style.opacity = "1";

  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter-behind";
    setTimeout(() => {
      letter.className = "letter-in";
    }, 400 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 4000);
//changing text end here

// mix it up portfolio site
var mixer = mixitup(".portfolio-gallery");

//active menu /////////////////////////////////////
let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");
function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

//sticy navbar///////////////////
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector(".fa-bars");
let navlist = document.querySelector(".navlist");
let count = 1;
menuIcon.onclick = () => {
  // menuIcon.classList.toggle("fa-x")
  // menu.classList.remove("fa-bars")
  if (count) {
    menuIcon.style.transform = "rotate(-180deg)";
    count--;
  } else {
    menuIcon.style.transform = "rotate(180deg)";
    menuIcon.style.transition = "2s";
    count++;
  }
  menu.classList.toggle("fa-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("fa-x");
  navlist.classList.remove("open");
};

//parallax //////////////////
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});
const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

const scrollright = document.querySelectorAll(".scroll-right");
scrollright.forEach((el) => observer.observe(el));
