document.addEventListener("DOMContentLoaded", function() {

    // Écoute l'événement de soumission du formulaire
    document.querySelector(".search-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Empêche la soumission du formulaire
  
      var searchTerm = document.getElementById("search-box").value.toLowerCase();
      var cars = document.getElementsByClassName("car");
      var foundCar = false;
  
      for (var i = 0; i < cars.length; i++) {
        var carName = cars[i].querySelector("h2").innerText.toLowerCase();
  
        if (carName === searchTerm.toLowerCase()) {
          foundCar = true;
          var offset = 50; // espace de 50 pixels entre l'élément et le haut de la page
          var elementPosition = cars[i].getBoundingClientRect().top + window.pageYOffset;
          var offsetPosition = elementPosition - offset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
  
          break;
        }
      }
  
      if (!foundCar) {
        alert("Voiture non trouvée.");
      }
    });
  
  });
  