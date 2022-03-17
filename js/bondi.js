let btn = document.getElementById("btnscroll");
let ontherLinks = document.getElementById("onther-links");

window.onscroll = function () {
  if (scrollY >= 680) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  scroll({
    top: 0,
    let: 0,
    behavior: "smooth",
  });
};
