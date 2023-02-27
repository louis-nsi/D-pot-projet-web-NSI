window.addEventListener('load', function() {
  // Obtiens l'élément avec la classe "car"
  var carElement = document.querySelector('.car');

  // Obtiens l'élément de flèche
  var arrowElement = document.querySelector('.scroll-down-arrow');

  // Ajoute un écouteur d'événements pour le clic sur la flèche
  arrowElement.addEventListener('click', function() {
    // Obtiens la position de l'élément avec la classe "car"
    var carPosition = carElement.getBoundingClientRect().top + window.scrollY;
    
    // Fait défiler vers la position de l'élément avec un comportement de défilement fluide (smooth)
    window.scrollTo({
      top: carPosition - 200,
      behavior: 'smooth'
    });
  });
});