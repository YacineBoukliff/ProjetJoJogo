 const storedPseudo = localStorage.getItem('userPseudo');
 const storedPassword = localStorage.getItem('userPassword');

console.log(storedPseudo)




document.addEventListener('DOMContentLoaded', function() {
    const BoutonMenu = document.getElementById('BoutonMenu');
    const Defilement = document.getElementById('Defilement');

    BoutonMenu.addEventListener('click', function(event) {
      event.stopPropagation();
      Defilement.classList.toggle('hidden');
    });

    document.addEventListener('click', function(event) {
      if (!Defilement.contains(event.target) && !BoutonMenu.contains(event.target)) {
        Defilement.classList.add('hidden');
      }
    });
  });


 function afficherNavbar(){ 

    const header = document.querySelector('.js-header')

    let navbar = ""
    
    navbar += `
      <div class="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
      <a href="index.html" class="flex-shrink-0 flex items-center text-white">
        <span class="text-2xl font-medium">JoJogo</span>
      </a>
      
      <nav class="hidden md:flex items-center space-x-5">
        <a class="text-white text-lg font-semibold hover:text-black dark:hover:text-sky-500 hover:cursor-pointer">Accueil</a>
         <a href="CreerSession.html" class="text-white text-lg font-semibold hover:text-black dark:hover:text-sky-500 hover:cursor-pointer">Créer une session</a>
        <a class="text-white text-lg font-semibold hover:text-black dark:hover:text-sky-500 hover:cursor-pointer">Sports</a>
        <a class="text-white text-lg font-semibold hover:text-black dark:hover:text-sky-500 hover:cursor-pointer">FAQ</a>
      </nav>
      
      <div class="flex items-center space-x-4">
        
       <div class="relative inline-block text-left">
  <button id="BoutonMenu" class="text-white bg-black hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-white font-medium rounded-full text-sm py-2 px-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-white" type="button">
    ${storedPseudo}
    <svg class="ml-2 fill-white dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path>
      <path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path>
    </svg>
  </button>
  
  <div id="Defilement" class="absolute right-0 mt-2 w-52 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 hidden">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
      <li>
        <a  href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold ">  
        Paramètres</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold">Stats</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold">Créer nouveau compte </a>
      </li>
       <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold js-deconnexion">Déconnexion</a>
      </li>
    </ul>
  </div>
</div>
  
        
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
    header.innerHTML = navbar 
 }

 afficherNavbar()

 
 function SeDeconnecter() {
  const liendeconnexion = document.querySelector('.js-deconnexion');

  if (liendeconnexion) {
    liendeconnexion.addEventListener('click', function(event) {
      event.preventDefault();
      const AlerteDeconnexion = document.getElementById('CreerSessionAlerteDeconnexion');
      if (AlerteDeconnexion) {
        AlerteDeconnexion.classList.remove('hidden');
        
        const boutonDeconnexion = document.querySelector('.creer-session-bouton-deconnexion');
        const boutonAnnuler = document.querySelector('.creer-session-bouton-annuler');
        const boutonChargement = document.querySelector('.js-bouton-chargement');
     
        if (boutonDeconnexion) {
          boutonDeconnexion.addEventListener('click', () => {
            boutonDeconnexion.classList.add('hidden');
            if (boutonAnnuler) boutonAnnuler.classList.add('hidden');
           
            boutonChargement.classList.remove('hidden');
           
            setTimeout(() => {
              window.location.href = 'UtilisateurEnregistre.html';
            }, 2000);
          });
        }

        if (boutonAnnuler) {
          boutonAnnuler.addEventListener('click', () => {
            AlerteDeconnexion.classList.add('hidden');
          });
        }
      } 
    });
  } 
}

document.addEventListener('DOMContentLoaded', SeDeconnecter);


 


document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.sport-slide');
  const buttons = document.querySelectorAll('[data-slide]');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const sport = button.dataset.slide;
      slides.forEach(slide => {
        slide.classList.toggle('hidden', slide.dataset.sport !== sport);
      });
      buttons.forEach(btn => btn.classList.toggle('opacity-100', btn === button));
    });
  });
});

 


  function AfficherFAQ(){

    const FAQ = document.querySelector('.faq-section')

    

    let faqHTML = ""

    faqHTML += `
<div class="container mx-auto px-4 js-section-faq">
  <h2 class="text-5xl font-bold text-center text-black dark:text-white mb-10">FAQ</h2>
  
  <div class="max-w-3xl mx-auto">
    <!-- Accrodion Container -->
    <div class="space-y-4">
      
      <!-- Accordéon 1 -->
      <div class="collapse collapse-arrow bg-base-200 rounded-lg shadow-lg shadow-black dark:shadow-md dark:shadow-blue-500 border-2 border-black dark:border-blue-500">
        <input type="radio" name="my-accordion" id="faq1" checked />
        <label for="faq1" class="collapse-title text-xl cursor-pointer dark:text-white font-bold text-black ">
          A quoi sert Jojogo ?
        </label>
        <div class="collapse-content">
          <p>
            Grâce à Jojogo, vous pouvez trouver des partenaires pour vos activités sportives préférées. Vous pouvez également créer des événements et inviter vos amis à y participer.
          </p>
        </div>
      </div>

      <!-- Accordéon 2 -->
      <div class="collapse collapse-arrow bg-base-200 rounded-lg shadow-lg shadow-black dark:shadow-md dark:shadow-blue-500 border-2 border-black dark:border-blue-500">
        <input type="radio" name="my-accordion" id="faq2" />
        <label for="faq2" class="collapse-title text-xl  cursor-pointer dark:text-white font-bold text-black">
          Pourquoi avoir créé Jojogo ?
        </label>
        <div class="collapse-content">
          <p>
            C'est une idée que j'ai depuis un bon moment et que je voulais mettre en place. Je voulais créer une application qui permet de trouver des partenaires pour faire des activités sportives. 
            <br>
            Tout le monde n'a pas envie de faire du sport seul, et il est difficile de trouver des personnes pour faire des activités sportives.
            <br>
            Justement, Jojogo vient pour résoudre ce problème.
          </p>
        </div>
      </div>

      <!-- Accordéon 3 -->
      <div class="collapse collapse-arrow bg-base-200 rounded-lg shadow-lg shadow-black dark:shadow-md dark:shadow-blue-500 border-2 border-black dark:border-blue-500">
        <input type="radio" name="my-accordion" id="faq3" />
        <label for="faq3" class="collapse-title text-xl  cursor-pointer dark:text-white font-bold text-black">
          D'autres sports sont prévus ?
        </label>
        <div class="collapse-content">
          <p>
            Oui, bien évidemment ! J'ai prévu d'ajouter d'autres sports comme le tennis, le JJB/Grappling et la course à pied.
          </p>
        </div>
      </div>

      <!-- Accordéon 4 -->
      <div class="collapse collapse-arrow bg-base-200 rounded-lg shadow-lg shadow-black dark:shadow-md dark:shadow-blue-500 border-2 border-black dark:border-blue-500">
        <input type="radio" name="my-accordion" id="faq4" />
        <label for="faq4" class="collapse-title text-xl  cursor-pointer dark:text-white font-bold text-black">
          L'aspect compétitif va-t-il être plus poussé ?
        </label>
        <div class="collapse-content">
          <p>
            Évidemment ! Jojogo a pour but d'élever l'enjeu de ses sections compétitions et de proposer un aspect plus développé avec un système de champions pour chaque banlieue, ville, région, pour chaque sport (badges exclusifs) et déterminer qui sera le champion incontesté de France.
            <br>
            Chaque sport aura sa propre division de champions.
          </p>
        </div>
      </div>

      <!-- Accordéon 5 -->
      <div class="collapse collapse-arrow bg-base-200 rounded-lg shadow-lg shadow-black dark:shadow-md dark:shadow-blue-500 border-2 border-black dark:border-blue-500">
        <input type="radio" name="my-accordion" id="faq5" />
        <label for="faq5" class="collapse-title text-xl cursor-pointer dark:text-white font-bold text-black">
          D'autres fonctionnalités sont à venir ?
        </label>
        <div class="collapse-content">
          <p>Oui, soyez patient :) </p>
        </div>
      </div>
      
    </div>
  </div>
</div>
    `

    FAQ.innerHTML = faqHTML

  }

  AfficherFAQ()

function afficherSectionPremium(){
  const DivPremium = document.querySelector('.Premium')

  let HtmlPremium = ""

  HtmlPremium += `
  <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mt-10 sm:mt-20 text-center">Jojogo Expérience</h1>
  
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-10 sm:mb-20">
      <h5 class="mb-4 text-xl font-medium text-black dark:text-white">Accès Premium</h5>
      <div class="flex items-baseline text-gray-900 dark:text-white">
        <span class="text-4xl sm:text-5xl font-extrabold tracking-tight">9</span>
        <span class="text-xl sm:text-2xl font-extrabold tracking-tight">.</span>
        <span class="text-4xl sm:text-5xl font-extrabold tracking-tight">99</span>
        <span class="text-4xl sm:text-5xl font-semibold">€</span>
        <span class="ml-1 text-xl sm:text-2xl font-semibold">/Mois</span>
      </div>
      <ul role="list" class="space-y-4 my-6 sm:my-10">
        <li class="flex items-start">
          <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500 mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span class="text-sm sm:text-base font-normal leading-tight text-black dark:text-white ml-3">Nombres de sports illimités</span>
        </li>
        <li class="flex items-start">
          <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500 mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span class="text-sm sm:text-base font-normal leading-tight text-black dark:text-white ml-3">Création de sessions illimités</span>
        </li>
        <li class="flex items-start">
          <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500 mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span class="text-sm sm:text-base font-normal leading-tight text-black dark:text-white ml-3">Badges exclusifs</span>
        </li>
        <li class="flex items-start">
          <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500 mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span class="text-sm sm:text-base font-normal leading-tight text-black dark:text-white ml-3">Accès au mode compétiteur Jojogo</span>
        </li>
        <li class="flex items-start">
          <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500 mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span class="text-sm sm:text-base font-normal leading-tight text-black dark:text-white ml-3">Accès au mode champion</span>
        </li>
        <li class="flex items-start">
          <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500 mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span class="text-sm sm:text-base font-normal leading-tight text-black dark:text-white ml-3">Visibilité des sessions accrue</span>
        </li>
        <li class="flex items-start">
          <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500 mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span class="text-sm sm:text-base font-normal leading-tight text-black dark:text-white ml-3">Accès au futur mode communautaire</span>
        </li>
      </ul>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center transition duration-150 ease-in-out">Rejoindre Jojogo Premium</button>
    </div>
  
  
  `

  DivPremium.innerHTML = HtmlPremium
}

afficherSectionPremium()
  

