const bouton = document.querySelector('.js-bouton')
const pseudo = document.querySelector('.js-pseudo')
const email = document.querySelector('.js-email')
const motDePasse = document.getElementById('motdepasse')
const retapezMotDePasse = document.getElementById('retapezmotdepasse')
const test = document.querySelector('.js-test')

// Variable pour gérer le timeout
let timeoutId;

function inscription(){
    const regexPseudo = /^(?=.*[a-zA-Z])[\w\d]{6,}$/;
    const regexMotDePasse = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w\d!@#$%^&*()-=+{};:,<.>]{8,72}$/;
    const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]*[a-zA-Z0-9]@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

    bouton.addEventListener('click' , () => {
        clearTimeout(timeoutId);
// Vérification des champs vides
        if(pseudo.value === "" || motDePasse.value === "" || email.value === "" || retapezMotDePasse.value === ""){
            test.classList.add("text-red-500");
            test.textContent = 'Veuillez rentrer toutes vos informations !';
        } else if (pseudo.value.trim() === "") {
            test.classList.add("text-red-500");
            test.textContent = 'Veuillez rentrer un pseudo !';
        } else if (email.value.trim() === "") {
            test.classList.add("text-red-500");
            test.textContent = 'Veuillez rentrer un email !';
        } else if (motDePasse.value.trim() === "") {
            test.classList.add("text-red-500");
            test.textContent = 'Veuillez rentrer un mot de passe !';
        } else if (retapezMotDePasse.value.trim() === "") {
            test.classList.add("text-red-500");
            test.textContent = 'Veuillez confirmer votre mot de passe !';
        } else {
            // Continuer avec les autres vérifications (regex, etc.)
            if(!regexPseudo.test(pseudo.value)) {
                test.classList.add("text-red-500");
                test.textContent = 'Veuillez entrer un pseudo avec au moins 6 caractères !';
            } else if (!regexMotDePasse.test(motDePasse.value)) {
                test.classList.add("text-red-500");
                test.textContent = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.';
            } else if (!emailRegex.test(email.value)) {
                test.classList.add("text-red-500");
                test.textContent = 'Veuillez entrer une adresse email valide.';
            } else if (motDePasse.value !== retapezMotDePasse.value) {
                test.classList.add("text-red-500");
                test.textContent = 'Les mots de passe ne correspondent pas.';
            } else {
                test.classList.add("text-green-500");
                test.textContent = 'Merci pour votre inscription !';
            }
        }
// Effacer le message d'erreur et les classes après 5 secondes
        timeoutId = setTimeout(() => {
            test.textContent = "";
            test.classList.remove("text-red-500", "text-green-500");
        }, 5000);
    })
    
}

inscription()