import Swal from 'sweetalert2';

const dogBtn = document.getElementById('dogBtn');
const catBtn = document.getElementById('catBtn');
const surpriseBtn = document.getElementById('surpriseBtn');
const img = document.getElementById('animalImg');

dogBtn.addEventListener('click', async (event) => {
  event.preventDefault()

  try {
    const promise = await fetch(`https://dog.ceo/api/breeds/image/random`);
    if (!promise.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await promise.json();
    img.src = data.message;
  } catch (error) {
    Swal.fire({
      title: 'Animal nao encontrado',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Tente Novamente',
    })
  }
});

catBtn.addEventListener('click', async (event) => {
  event.preventDefault()

  try {
    const promise = await fetch(`https://api.thecatapi.com/v1/images/search`);
    if (!promise.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await promise.json();
    img.src = data[0].url;
  } catch (error) {
    Swal.fire({
      title: 'Animal nao encontrado',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Tente Novamente',
    })
  }
});

surpriseBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  try {
    const [catResponse, dogResponse] = await Promise.all([
      fetch("https://api.thecatapi.com/v1/images/search"),
      fetch("https://dog.ceo/api/breeds/image/random"),
    ]);

    if (!catResponse.ok || !dogResponse.ok) {
      throw new Error('Network response was not ok');
    }

    const [catData, dogData] = await Promise.all([
      catResponse.json(),
      dogResponse.json(),
    ]);

    const petURL = dogData.message || catData[0].url;

    petImage.src = petURL;
  } catch (error) {
    Swal.fire({
      title: 'Erro',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
});