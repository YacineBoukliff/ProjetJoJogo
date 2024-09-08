const storedPseudo = localStorage.getItem('userPseudo');
const storedPassword = localStorage.getItem('userPassword');

console.log(storedPseudo)
console.log(storedPassword)


const menu = document.querySelector('.js-menu')

function afficherMenu(){


    let menuHtml = ""   
   
    menuHtml += `
     <div class="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
      <a href="index.html" class="flex-shrink-0 flex items-center text-white">
        <span class="text-2xl font-medium">JoJogo</span>
      </a>
      
      <nav class="hidden md:flex items-center space-x-5">
        <a class="text-slate-50 font-semibold hover:text-black dark:hover:text-sky-500 hover:cursor-pointer">Accueil</a>
        <a class="text-slate-50 font-medium hover:text-black dark:hover:text-sky-500 hover:cursor-pointer">Sports</a>
        <a class="text-slate-50 font-medium hover:text-black dark:hover:text-sky-500 hover:cursor-pointer">FAQ</a>
      </nav>
      
      <div class="flex items-center space-x-4">
        <button class="bg-black  hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm transition duration-300 ease-in-out transform hover:scale-105">
          <a  class="flex items-center js-reconnexion ">
            Se connecter
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </button>
        
        <div class="boutonDarkMode">
          <label class="swap swap-rotate">
            <input type="checkbox" class="theme-controller" value="dark" />
            <svg class="swap-on fill-current w-8 h-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
            </svg>
            <svg class="swap-off fill-current w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
            </svg>
          </label>
        </div>
      </div>
    </div>
    `
    menu.innerHTML = menuHtml
    
}   

afficherMenu()



const accueil = document.querySelector('.js-accueil')


function AfficherAccueil(){

   let accueilHtml = "" 
   
   accueilHtml += `
  <div class="max-w-5xl mx-auto text-center mb-8">
      <h1 class="text-white dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Venez faire du sport que vous soyez Amateur ou Compétiteur.
      </h1>
      
      <p class="text-white dark:text-gray-300 text-base sm:text-lg md:text-xl mb-8">
        Grace a JoJogo trouvez des personnes avec qui faire du sport que ce soit a niveau amateur ou compétiteur. <br>
        Organiser ou rejoignez des sessions de sport et découvrez ou progressez ensemble. 
      </p>
      
      <div class="flex justify-center">
        <button class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl text-sm transition duration-300 ease-in-out transform hover:scale-105 js-rejoindre">
          <a  class="flex items-center text-xl  ">
            Rejoins JoJogo
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-6 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </button>
      </div>
      
    </div>
   `

   accueil.innerHTML = accueilHtml

   let boutonRejoindre = document.querySelector('.js-rejoindre')

   boutonRejoindre.addEventListener('click', () => {
    console.log("ca fonctionne")
   })
    
}

AfficherAccueil()

function SeReconnecter(){

    const boutonReconnexion = document.querySelector('.js-reconnexion')

    boutonReconnexion.addEventListener('click', () => {
        if (storedPseudo && storedPassword){
            window.location.href = 'UtilisateurConnecte.html'
        }
        else{
            console.log("Erreur")
        }   
    })
}

SeReconnecter()