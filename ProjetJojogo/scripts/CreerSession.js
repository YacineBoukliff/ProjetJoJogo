
import {alerte} from "./testimport.js"  
console.log(alerte)
import {initialiserAutocompletionAdresse} from "../scripts/Api/Api.js"


const storedPseudo = localStorage.getItem('userPseudo');
console.log(storedPseudo);

document.addEventListener('DOMContentLoaded', function() {
  const BoutonMenu = document.getElementById('CreerSessionBoutonMenu');
  const Defilement = document.getElementById('CreerSessionDefilement');

  if (BoutonMenu && Defilement) {
    BoutonMenu.addEventListener('click', function(event) {
      event.stopPropagation();
      Defilement.classList.toggle('hidden');
    });

    document.addEventListener('click', function(event) {
      if (!Defilement.contains(event.target) && !BoutonMenu.contains(event.target)) {
        Defilement.classList.add('hidden');
      }
    });
  }
});

function afficherNavbar(){ 
    const header = document.querySelector('.creer-session-header');
    

    let navbar = `
      <div class="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <a href="UtilisateurConnecte.html" class="flex-shrink-0 flex items-center text-white">
          <span class="text-2xl font-medium">JoJogo</span>
        </a>
        
        <nav class="hidden md:flex items-center space-x-5">
          <a class="text-slate-50 font-semibold hover:text-black dark:hover:text-sky-500 hover:cursor-pointer">Accueil</a>
          <a class="text-slate-50 font-medium hover:text-black dark:hover:text-sky-500 hover:cursor-pointer">Sports</a>
          <a class="text-slate-50 font-medium hover:text-black dark:hover:text-sky-500 hover:cursor-pointer">FAQ</a>
        </nav>
        
        <div class="flex items-center space-x-4">
          <div class="relative inline-block text-left">
            <button id="CreerSessionBoutonMenu" class="text-white bg-black hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-white font-medium rounded-full text-sm py-2 px-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-white" type="button">
              ${storedPseudo}
              <svg class="ml-2 fill-white dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path>
                <path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path>
              </svg>
            </button>
            
            <div id="CreerSessionDefilement" class="absolute right-0 mt-2 w-52 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 hidden">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                 <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold">Paramètres</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold">Stats</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold">Créer nouveau compte</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold creer-session-deconnexion">Déconnexion</a>
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
    `;
    header.innerHTML = navbar;
}

function SeDeconnecter() {
  const liendeconnexion = document.querySelector('.creer-session-deconnexion');
  if (!liendeconnexion) return;

  liendeconnexion.addEventListener('click', function(event) {
    event.preventDefault();
    const AlerteDeconnexion = document.getElementById('CreerSessionAlerteDeconnexion');
    if (!AlerteDeconnexion) return;
    AlerteDeconnexion.classList.remove('hidden');
    
    const boutonDeconnexion = document.querySelector('.creer-session-bouton-deconnexion');
    const boutonAnnuler = document.querySelector('.creer-session-bouton-annuler');
    const boutonChargement = document.querySelector('.js-chargement-bouton');
    
    if (boutonDeconnexion) {
      boutonDeconnexion.addEventListener('click', () => {
        boutonDeconnexion.classList.add('hidden');
        if (boutonAnnuler) boutonAnnuler.classList.add('hidden');
        boutonChargement.classList.remove('hidden');
        
        setTimeout(() => {
          window.location.href = 'UtilisateurEnregistre.html';
        }, 2300);
      });
    }

    if (boutonAnnuler) {
      boutonAnnuler.addEventListener('click', () => {
        AlerteDeconnexion.classList.add('hidden');
      });
    }
  });
}

afficherNavbar();
SeDeconnecter();

document.addEventListener('DOMContentLoaded', initialiserAutocompletionAdresse());




function GenererModifierSession (){

  let DivModifierSession = document.querySelector('.js-modifiersession')

  let ModifierSessionHTML = ""

  ModifierSessionHTML += `

   <h1 class="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white">Modifier session  </h1>
    <form id="sessionForm" class="mx-auto mb-4 max-w-md rounded bg-white dark:bg-black px-8 pb-8 pt-6 shadow-md border border-black dark:border-white">
      <div class="mb-4">
        <label class="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300" for="sport">Sport *</label>
        <select id="sport" name="sport" class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 dark:text-gray-300 dark:bg-gray-700 shadow focus:outline-none" required>
          <option value="">Sélectionnez un sport</option>
          <option value="football">Football</option>
          <option value="basketball">Futsal</option>
          <option value="basketball">Musculation</option>
          <option value="basketball">Basketball</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300" for="level">Niveau *</label>
        <select id="level" name="level" class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 dark:text-gray-300 dark:bg-gray-700 shadow focus:outline-none" required>
          <option value="">Sélectionnez votre niveau</option>
          <option value="amateur">Amateur</option>
          <option value="competitor">Compétiteur</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300" for="date">Date *</label>
        <input type="date" id="date" name="date" class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 dark:text-gray-300 dark:bg-gray-700 shadow focus:outline-none" required />
      </div>
      <div class="mb-4">
        <label class="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300" for="texte">Age *</label>
        <input type="text" id="AgeInput" name="texte" class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 dark:text-gray-300 dark:bg-gray-700 shadow focus:outline-none" required />
      </div>
      <div class="mb-4">
        <label class="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300" for="time">Heure de départ * </label>
        <input type="time" id="time" name="time" class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 dark:text-gray-300 dark:bg-gray-700 shadow focus:outline-none" required />
      </div>
      <div class="mb-4">
        <label class="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300" for="time">Heure de fin * </label>
        <input type="time" id="time" name="time" class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 dark:text-gray-300 dark:bg-gray-700 shadow focus:outline-none" required />
      </div>
      
      <div class="mb-4 relative">
        <label class="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300" for="location">Lieu *</label>
        <input type="text" id="location" name="location" placeholder="Entrez le lieu" class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 dark:text-gray-300 dark:bg-gray-700 shadow focus:outline-none" required />
        <ul id="locationSuggestions" class="absolute z-10 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-b-lg shadow-lg max-h-60 overflow-auto hidden"></ul>
      </div>
      <div class="mb-6">
        <label class="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300" for="notes">Informations supplémentaires</label>
        <textarea id="notes" name="notes" placeholder="Toute information complémentaire" class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 dark:text-gray-300 dark:bg-gray-700 shadow focus:outline-none" rows="3"></textarea>
      </div>
      <div class="flex items-center justify-center">
        <button type="submit" class=" Js-CreerSession focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-700 focus:outline-none">Créer la session</button>
      </div>
    </form>
  
  `

  DivModifierSession.innerHTML = ModifierSessionHTML
}

GenererModifierSession()