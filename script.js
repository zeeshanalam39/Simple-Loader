let content = document.getElementsByTagName('h2')[0];
let loader = document.querySelector('.loader');
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');

content.style.display = 'none'; // Hide website content at start.

setTimeout(showContent, 5000); // Show Loader for 5s & then show website content.

function showContent() {
    content.style.display = 'block';
    loader.style.display = 'none';
}

function startStop(event) {
    if (event.target.id === 'start') {
        content.style.display = 'none';
        loader.style.display = 'block';
    } else {
        content.style.display = 'block';
        loader.style.display = 'none';
    }
}

startBtn.addEventListener('click', startStop); // Start loading
stopBtn.addEventListener('click', startStop); // Stop loading