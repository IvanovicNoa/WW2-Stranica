window.addEventListener("scroll", scroll);

function scroll() {
  let elementi = document.querySelectorAll(".scroll");

  for (let i = 0; i < elementi.length; i++) {
    let visina = window.innerHeight;
    let pokaz = elementi[i].getBoundingClientRect().top;
    let visinaOdPokazivanja = 150;

    if (pokaz < visina - visinaOdPokazivanja) {
      elementi[i].classList.add("active");
    }
  }
}
