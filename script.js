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

// ..................................CIRCLE SKILLS .............................
const circles = document.querySelectorAll('.circle')
circles.forEach(elem=>{
  var dots=elem.getAttribute('data-dots');
  var marked=elem.getAttribute('data-percent');
  var percent=Math.floor(dots*marked/100);
  var points = "";
  var rotate =360/dots;
  for (let i = 0; i < dots; i++) {
     points+=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML=points

  const pointsMarked=elem.querySelectorAll('.points');
  for (let i = 0; i < percent; i++) {
   pointsMarked[i].classList.add('marked')
  }
})

// mix it up portfolio site
var mixer = mixitup('.portfolio-gallery');

//active menu /////////////////////////////////////
let menuLi=document.querySelectorAll('header ul li a');
let section=document.querySelectorAll('section');
function activeMenu(){
  let len=section.length;
  while (--len && window.scrollY +97 < section[len].offsetTop) {
    
  }
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu)

//sticy navbar///////////////////
const header=document.querySelector("header");
window.addEventListener("scroll",function() {
  header.classList.toggle("sticky",window.scrollY>50)
})

//toggle icon navbar
let menuIcon=document.querySelector("#menu-icon")
let menu=document.querySelector(".fa-bars")
let navlist=document.querySelector(".navlist")
let count=1;
menuIcon.onclick=()=>{
  // menuIcon.classList.toggle("fa-x")
  // menu.classList.remove("fa-bars")
  if (count) {
    menuIcon.style.transform="rotate(-180deg)"
    count--;
  } else {
    menuIcon.style.transform="rotate(180deg)"
    menuIcon.style.transition="1s"
   count++;
  }
  menu.classList.toggle("fa-x")
  navlist.classList.toggle("open")
}

window.onscroll=()=>{
  menu.classList.remove('fa-x');
  navlist.classList.remove('open')
}