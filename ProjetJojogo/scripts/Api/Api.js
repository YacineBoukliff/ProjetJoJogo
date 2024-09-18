export function initialiserAutocompletionAdresse() {
    // Récupération des éléments du DOM
    const champAdresse = document.getElementById('location'); // Le champ de saisie de l'adresse
    const listeSuggestions = document.getElementById('locationSuggestions'); // La liste où s'afficheront les suggestions
    let idDelai; // Variable pour stocker l'ID du délai (utilisé pour le debounce)
  
    
    champAdresse.addEventListener('input', function() {
      clearTimeout(idDelai); 
      
      idDelai = setTimeout(() => {
        const requete = this.value; // Récupère la valeur saisie dans le champ
        if (requete.length > 3) { // Si la saisie a plus de 3 caractères
          recupererSuggestionsAdresse(requete); // Lance la recherche de suggestions
        } else {
          listeSuggestions.innerHTML = ''; // Vide la liste des suggestions
          listeSuggestions.classList.add('hidden'); // Cache la liste des suggestions
        }
      }, 300); // Attend 300ms avant d'exécuter (pour éviter trop de requêtes)
    });
  
    function formaterAdresse(element) {
        console.log(element.address)
      const adresse = element.address; // Récupère les détails de l'adresse
      let adresseFormatee = '';
      
      // Construction de l'adresse formatée avec les éléments disponibles
      if (adresse.house_number) adresseFormatee += adresse.house_number + ' ';
      if (adresse.road) adresseFormatee += adresse.road + ', ';
      if (adresse.postcode) adresseFormatee += adresse.postcode + ' ';
      if (adresse.city) adresseFormatee += adresse.city;
      
      return adresseFormatee.trim(); 
    }
  
  
  
    function recupererSuggestionsAdresse(requete) {
      // Construction de l'URL pour l'API Nominatim avec des paramètres spécifiques
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(requete)}&limit=5&addressdetails=1&countrycodes=fr&featuretype=street,house`;
      
      // Envoi de la requête à l'API
      fetch(url)
        .then(reponse => reponse.json()) 
        .then(donnees => {
          console.log(donnees)
          listeSuggestions.innerHTML = '';
          donnees.forEach(element => {
            console.log("Type d'élément:", element.type); 
            console.log('Adresse complète:', element.display_name);
            if (element.type) {
              const li = document.createElement('li'); 
              li.textContent = formaterAdresse(element); 
              li.classList.add('p-2', 'hover:bg-gray-100', 'dark:hover:bg-gray-700', 'cursor-pointer');           
              li.addEventListener('click', () => {
                champAdresse.value = formaterAdresse(element); 
                listeSuggestions.innerHTML = ''; 
                listeSuggestions.classList.add('hidden'); 
              });
              listeSuggestions.appendChild(li); // Ajoute la suggestion à la liste
            }
          });
          // Affiche ou cache la liste selon qu'il y a des suggestions ou non
          if (listeSuggestions.children.length > 0) {
            listeSuggestions.classList.remove('hidden');
          } else {
            listeSuggestions.classList.add('hidden');
          }
        })
        .catch(erreur => console.error('Erreur:', erreur)); 
    }
  
  
    // Écouteur d'événements pour fermer la liste de suggestions si on clique ailleurs
    document.addEventListener('click', function(e) {
      if (e.target !== champAdresse && e.target !== listeSuggestions) {
        listeSuggestions.classList.add('hidden');
      }
    });
  }
  