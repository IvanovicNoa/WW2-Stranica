let slikaMp40 = document.querySelector(".slika-mp40");
let mp40 = document.querySelector(".audio-mp40");
slikaMp40.addEventListener("mouseenter", () => {
  mp40.play();
});
slikaMp40.addEventListener("mouseleave", () => {
  mp40.pause();
});

let slikaMg42 = document.querySelector(".slika-mg42");
let mg42 = document.querySelector(".audio-mg42");
slikaMg42.addEventListener("mouseenter", () => {
  mg42.play();
});
slikaMg42.addEventListener("mouseleave", () => {
  mg42.pause();
});

let slikaSten = document.querySelector(".slika-sten");
let sten = document.querySelector(".audio-sten");
slikaSten.addEventListener("mouseenter", () => {
  sten.play();
});
slikaSten.addEventListener("mouseleave", () => {
  sten.pause();
});

let slikaBren = document.querySelector(".slika-bren");
let bren = document.querySelector(".audio-bren");
slikaBren.addEventListener("mouseenter", () => {
  bren.play();
});
slikaBren.addEventListener("mouseleave", () => {
  bren.pause();
});

let slikaThompson = document.querySelector(".slika-thompson");
let thompson = document.querySelector(".audio-thompson");
slikaThompson.addEventListener("mouseenter", () => {
  thompson.play();
});
slikaThompson.addEventListener("mouseleave", () => {
  thompson.pause();
});
