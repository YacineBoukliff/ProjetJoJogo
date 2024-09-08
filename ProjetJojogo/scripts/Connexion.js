const InputPseudo = document.querySelector('.js-pseudo');
const InputMotDePasse = document.querySelector('.js-motdepasse-connexion');
const boutonConnexion = document.querySelector('.js-connexion');
const messageConnexion = document.querySelector('.js-message-connexion');
console.log(boutonConnexion)

console.log(InputMotDePasse)

function connexion() {
    // Ajout de console.log pour afficher les valeurs du localStorage
    console.log('Valeurs stockées dans le localStorage :');
    console.log('Pseudo:', localStorage.getItem('userPseudo'));
    console.log('Mot de passe:', localStorage.getItem('userPassword'));
    

    boutonConnexion.addEventListener('click', () => {
        const storedPseudo = localStorage.getItem('userPseudo');
        const storedPassword = localStorage.getItem('userPassword');

        // Ajout de console.log pour afficher les valeurs entrées par l'utilisateur
        console.log("Valeurs entrées par l'utilisateur :");
        console.log('Pseudo:', InputPseudo.value);
        console.log('Mot de passe:', InputMotDePasse.value);

        if (InputPseudo.value === storedPseudo && InputMotDePasse.value === storedPassword) {
            messageConnexion.textContent = 'Connexion réussie !';
            messageConnexion.classList.add('text-green-500');
            console.log('Connexion réussie');
            // Rediriger vers la page d'accueil ou le tableau de bord
            setTimeout(() => {
                window.location.href = '../Html/UtilisateurConnecté.html';
            }, 2000);
            
        }

        else if (InputPseudo.value === storedPseudo && InputMotDePasse.value !== storedPassword) {
            messageConnexion.textContent = 'Mot de passe incorrect.';
            messageConnexion.classList.add('text-red-500');
            console.log('Échec de la connexion');
        }   
        
        
        else {
            messageConnexion.textContent = 'Pseudo ou mot de passe incorrect.';
            messageConnexion.classList.add('text-red-500');
            console.log('Échec de la connexion');
        }
    });
}

connexion();