import Swal from 'sweetalert2';

const btn = document.getElementById('btn');
const name = document.getElementById('nameHero');
const img = document.getElementById('imgHero');
const API_KEY = 'https://akabab.github.io/superhero-api/api';

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

btn.addEventListener('click', generate);

const generate = async () => {
    try {
        const promise = await fetch(`https://akabab.github.io/superhero-api/api/id/${randomNumber()}.json`);
        const data = await promise.json();
    }
};