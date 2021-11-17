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
