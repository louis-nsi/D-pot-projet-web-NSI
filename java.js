const modeToggle = document.querySelector('#mode-toggle');
const body = document.querySelector('body');

modeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    modeToggle.textContent = 'Mode clair';
  } else {
    modeToggle.textContent = 'Mode sombre';
  }
});
