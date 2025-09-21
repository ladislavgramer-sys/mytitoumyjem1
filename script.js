function spocitat() {
  let metry = document.getElementById('metry').value;
  let impregnace = document.querySelector('input[name="impregnace"]').checked;
  let cenaZaMetr = 50;

  if (impregnace) {
    cenaZaMetr += 20;
  }

  if (metry > 0) {
    let cena = metry * cenaZaMetr;
    document.getElementById('vysledek').innerText = "Orientační cena: " + cena + " Kč";
  } else {
    document.getElementById('vysledek').innerText = "Zadejte platný počet metrů.";
  }
}
