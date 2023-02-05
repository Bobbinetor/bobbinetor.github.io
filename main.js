<<<<<<< HEAD
window.addEventListener("load", () => {
  for (let i of document.querySelectorAll(".gallery img")) {
    i.onclick = () => i.classList.toggle("full");
  }
=======
const album = [
  {
    id: 1,
    url: 'roma.jpg',
  },
  /*
  {
    id: 2,
    url: 'https://via.placeholder.com/600x400/7fff7f/ffffff?text=2',
  },
  {
    id: 3,
    url: 'https://via.placeholder.com/600x400/7f7fff/ffffff?text=3',
  },
  */
  // Add more photos to the album here...
];

const albumContainer = document.querySelector('#photo-album');

album.forEach(photo => {
  const photoElement = document.createElement('div');
  photoElement.classList.add('photo-thumbnail');
  photoElement.style.backgroundImage = `url(${photo.url})`;
  photoElement.addEventListener('click', () => {
    // Show full-size photo on click
    // ...
  });
  albumContainer.appendChild(photoElement);
>>>>>>> cdb0ca105925a3366d0c5badb62f69d1e6abb9b1
});