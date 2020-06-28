let content = document.getElementsByTagName('h2')[0];
let loader = document.querySelector('.loader');
content.style.display = 'none'; // Hide website content at start.

setTimeout(showContent, 3000); // Show Loader for 3s & then show website content.

function showContent() {
    content.style.display = 'block';
    loader.remove() // Remove loader after content got loaded.
}