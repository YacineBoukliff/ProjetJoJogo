const bouton = document.querySelector('.js-bouton')
const pseudo = document.querySelector('.js-pseudo')
const email = document.querySelector('.js-email')
const motDePasse = document.getElementById('motdepasse')
const retapezMotDePasse = document.getElementById('retapezmotdepasse')
const test = document.querySelector('.js-test')


bouton.addEventListener('click', () => {
    console.log(pseudo.value)
})

function inscription(){
    const regexPseudo = /^(?=.*[a-zA-Z])[\w\d]{4,}$/;
    const regexMotDePasse = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w\d!@#$%^&*()-=+{};:,<.>]{8,72}$/;
    const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]*[a-zA-Z0-9]@[a-zA-Z0-9]+\.[a-zA-Z]+$/;


    bouton.addEventListener('click' , () => {
        if(pseudo.value === "" || motDePasse.value === "" || email.value === "" || motDePasse.value === ""){
            test.classList.add("text-red-500",);
            test.textContent = 'Veuillez rentrez toute vos informations ! '
            setTimeout(() => {
                test.textContent = ""
            }, 2500);
            
            if(pseudo.value.trim() !== "" || motDePasse.value.trim() !== "" || email.value.trim() !== "" || motDePasse.value.trim() !== "" && !regexPseudo.test(pseudo.value) ){
                test.classList.add("text-red-500",);
            test.textContent = 'Veuillez rentrez un pseudo ! '
            setTimeout(() => {
                test.textContent = ""
            }, 2500);
            }

        } else if (!regexPseudo.test(pseudo.value)) {
            test.classList.add("text-red-500");
            test.textContent = 'Veuillez entrer un pseudo valide !';
            setTimeout(() => {
                test.textContent = "";
            }, 2500);
        } else if (!regexMotDePasse.test(motDePasse.value)) {
            test.classList.add("text-red-500");
            test.textContent = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.';
            setTimeout(() => {
                test.textContent = "";
            }, 2500);
        } else if (!emailRegex.test(email.value)) {
            test.classList.add("text-red-500");
            test.textContent = 'Veuillez entrer une adresse email valide.';
            setTimeout(() => {
                test.textContent = "";
            }, 2500);
        } else if (motDePasse.value !== retapezMotDePasse.value) {
            test.classList.add("text-red-500");
            test.textContent = 'Les mots de passe ne correspondent pas.';
            setTimeout(() => {
                test.textContent = "";
            }, 2500);
        } else {
            test.classList.add("text-green-500",);
            test.textContent = 'Merci pour votre inscription  ! '
            setTimeout(() => {
                test.textContent = ""
            }, 2500);
        }
    })
    
}

inscription()
