function showMenu() {
  document.querySelector(".popup").classList.add("active");
}

function hideMenu() {
  document.querySelector(".popup").classList.remove("active");
}

const titles = [
  "titulo 1",
  "titulo 2",
  "titulo 3",
  "titulo 4",
  "titulo 5",
  "titulo 6",
  "titulo 7",
  "titulo 8",
  "titulo 9",
  "titulo 10",
];

const descriptions = [
  "Descripción 1",
  "Descripción 2",
  "Descripción 3",
  "Descripción 4",
  "Descripción 5",
  "Descripción 6",
  "Descripción 7",
  "Descripción 8",
  "Descripción 9",
  "Descripción 10",
];

function showImage(img, index) {
  console.log(img.src);
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector(".popup-image").classList.add("active");
  document
    .querySelector(".image-gallery-container img")
    .setAttribute("src", img.src);
  if (index != undefined) {
    document.querySelector("#title").innerText = titles[index - 1];
    document.querySelector("#description").innerText = descriptions[index - 1];
  } else {
    document.querySelector("#title").innerText = "";
    document.querySelector("#description").innerText = "";
  }
}

function hideImage() {
  document.querySelector("body").style.overflow = "auto";
  document.querySelector(".popup-image").classList.remove("active");
}

// Disable right click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// disable scroll
document.querySelector(".colb a").addEventListener("click", anchorClick, false);

function anchorClick(event) {
  event.preventDefault();
  return false;
}
