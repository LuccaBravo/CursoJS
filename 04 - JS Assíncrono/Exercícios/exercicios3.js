// Trás o elemento do HTML para o JavaScript
var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepositories(repositories) {
  listElement.innerHTML = "";
  for (repo of repositories) {
    const textElement = document.createTextNode(repo.name);
    const liElement = document.createElement('li');
    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}
function renderLoading(loading) {
  listElement.innerHTML = "";
  var textElement = document.createTextNode('Carregando...');
  var loadingElement = document.createElement('li');
  loadingElement.appendChild(textElement);
  listElement.appendChild(loadingElement);
}
function renderError(loading) {
  listElement.innerHTML = "";
  var textElement = document.createTextNode('Erro 404!');
  var errorElement = document.createElement('li');
  errorElement.style.color = "#FF1919";
  errorElement.appendChild(textElement);
  listElement.appendChild(errorElement);
}
function listRepositories() {
  var user = inputElement.value;
  if (!user) return;
  renderLoading();
  axios.get('https://api.github.com/users/LuccaBravo/CursoJS/')
    .then(function (response) {
      renderRepositories(response.data);
    })
    .catch(function () {
      renderError();
    });
}
