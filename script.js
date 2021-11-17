const bookSelect = document.getElementById('book');
const capSelect = document.getElementById('cap');
const versSelect = document.getElementById('vers');

const btnSearch = document.getElementById('btnSearch');
const resultVers = document.getElementById('resultVers');

function handleClick(event) {
  event.preventDefault();
  const book = bookSelect.value;
  const cap = capSelect.value;
  const vers = versSelect.value;
  pesquisar(book, cap, vers);
}

function pesquisar(book, cap, vers) {
  fetch(`https://bible-api.com/${book}+${cap}:${vers}?translation=almeida`)
    .then((response) => response.json())
    .then((json) => {
      resultVers.innerText = `${json.verses[0].verse}. ${json.verses[0].text}`;
    });
}

btnSearch.addEventListener('click', handleClick);

const anotation = document.getElementById('anotation');
const strong = document.getElementById('strong');
const italic = document.getElementById('italic');
const marcador = document.getElementById('marcador');

const positivo = 'active';
function trasformStrong(event) {
  strong.classList.toggle(positivo);

  if (strong.classList.contains(positivo) === true) {
    anotation.style.fontWeight = '700';
  } else {
    anotation.style.fontWeight = '400';
  }
}

function trasformItalic(event) {
  italic.classList.toggle(positivo);

  if (italic.classList.contains(positivo) === true) {
    anotation.style.fontStyle = 'italic';
  } else {
    anotation.style.fontStyle = 'normal';
  }
}

function trasformMarcador(event) {
  marcador.classList.toggle(positivo);
}

strong.addEventListener('click', trasformStrong);
italic.addEventListener('click', trasformItalic);
marcador.addEventListener('click', trasformMarcador);
