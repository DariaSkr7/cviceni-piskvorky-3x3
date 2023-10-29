import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'; // Tento řádek vám umožňuje používat funkci findWinner od jiného programátora. Více se o zápisu s import dozvíte v pozdějších lekcích.

// Kód níže je pouze ukázka použití funkce findWinner. Následující řádky smažte.

// Ukázka použití pro rozehranou hru 3x3, kde začínající hráč kolečko hrál všechny své tři tady do prvního sloupečku a druhý hráč křížek všechny své dva tahy do druhého sloupečku.
const ukazkoveHerniPole = ['o', 'x', '_', 'o', 'x', '_', 'o', '_', '_'];
// Pro lepší představu stejné pole lze zapsat i takto:
/*
const ukazkoveHerniPole = [
	'o', 'x', '_',
	'o', 'x', '_',
	'o', '_', '_',
]
*/

document.querySelectorAll('.hra').forEach((hra1) => {
  const pole = [];
  hra1.querySelectorAll('.policko').forEach((element) => {
    if (element.classList.contains('kolecko')) {
      pole.push('o');
    } else if (element.classList.contains('krizek')) {
      pole.push('x');
    } else if (element.classList.contains('nic')) {
      pole.push('_');
    }
  });

  const vitez = findWinner(pole);
  console.log(`Vyhrál hráč se symbolem ${vitez}.`);

  const vysledek = hra1.querySelector('.vysledek');

  if (vitez === 'o') {
    vysledek.textContent = 'Vyhrálo kolečko!';
  } else if (vitez === 'x') {
    vysledek.textContent = 'Vyhrál křížek!';
  } else if (vitez === 'tie') {
    vysledek.textContent = 'Remíza!';
  } else {
    vysledek.textContent = 'Hra ještě probíhá';
  }
});
