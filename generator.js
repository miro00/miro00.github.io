var firstWord = ['пожилой', 'тупой', 'пират','сашка','колька','щегол','отец','член','додик', 'патау', 'чингачгук','выхухоль','ебаный','большой','залупкин','гигант','шнырь', 'зяблик', 'кошочкин','ерохин','пупа','лупа','как дышать','пукнул','иванов','и','пункул','рожа','немытый','пыня','обэма','маленький','неумеха','неудачник'];
// var secondWord = [];
// var thirdWord = [];
var fw = document.getElementById('first-word');
var sw = document.getElementById('second-word');
var tw = document.getElementById('third-word');

function generate() {
  var firstRndm =  Math.floor(Math.random() * ((firstWord.length + 1) - 1)) + 1;
  var secondRndm =  Math.floor(Math.random() * ((firstWord.length + 1) - 1)) + 1;
  var thirdRndm =  Math.floor(Math.random() * ((firstWord.length + 1) - 1)) + 1;
  console.log(firstRndm + ' ' + secondRndm + ' ' + thirdRndm);
  
  fw.innerHTML = firstWord[firstRndm - 1];
  sw.innerHTML = firstWord[secondRndm - 1];   
  tw.innerHTML = firstWord[thirdRndm - 1]; 
}

