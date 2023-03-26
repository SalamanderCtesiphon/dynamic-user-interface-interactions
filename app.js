const menuBtn = document.getElementById('menu');
const dropDwn = document.querySelector('.dropdown');
const listItems = document.querySelector('.dropdown');

menuBtn.addEventListener('click', () => {
  menuBtn.style.display = 'none';
  dropDwn.style.display = 'block';
});

listItems.addEventListener('click', () => {
  menuBtn.style.display = 'flex';
  dropDwn.style.display = 'none';
});