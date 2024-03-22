const validator = require('validator');

const input = document.getElementById('input');
const btn = document.getElementById('btn');
const select = document.getElementById('select');
const text = document.getElementById('resposta')

btn.addEventListener('click', (event) => {
  event.preventDefault();

  const campos = {
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    hexColor: validator.isHexColor(input.value),
    email: validator.isEmail(input.value),
    uuid: validator.isUUID(input.value, 4),
    url: validator.isURL(input.value),
  };

  text.innerHTML = `A validacao retornou ${campos[select.value]}`
})