import Swal from 'sweetalert2';

const btn = document.getElementById('btn');
const name = document.getElementById('nameHero');
const img = document.getElementById('imgHero');

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

btn.addEventListener('click', async (event) => {
    event.preventDefault

    try {
        const promise = await fetch(`https://akabab.github.io/superhero-api/api/id/${randomNumber()}.json`);
        if (!promise.ok) {
            throw new Error('Network response was not ok');
          }
        const data = await promise.json();
        img.src = data.images.md;
        name.innerHTML = data.name;
    } catch(error) {
        Swal.fire({
            title: 'Hero not found',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'Cool',
    })}
});