let hero = ['Palestinian', 10001];
let lvl;

if (hero[1] < 1000) {
  lvl = 'Ferro';
} else if (hero[1] < 2000 && hero[1] >= 1001) {
  lvl = 'Bronze';
} else if (hero[1] < 5000 && hero[1] >= 2001) {
  lvl = 'Prata';
} else if (hero[1] < 7000 && hero[1] >= 5001) {
  lvl = 'Ouro';
} else if (hero[1] < 8000 && hero[1] >= 7001) {
  lvl = 'Platina';
} else if (hero[1] < 9000 && hero[1] >= 8001) {
  lvl = 'Ascendente';
} else if (hero[1] < 10000 && hero[1] >= 9001) {
  lvl = 'Imortal';
} else {
  lvl = 'Radiante';
}

let message = 'O herói de nome ' + hero[0] + ' está no nível ' + lvl + '!!!';
document.querySelector('#nameHero').innerHTML = hero[0];
document.querySelector('#xp').innerHTML = hero[1];
document.querySelector('#level').innerHTML = lvl;
document.querySelector('#message').innerHTML = message;
