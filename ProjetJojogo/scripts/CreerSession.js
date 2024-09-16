
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

// Début algorithme Création de session 

function CreerSession() {
  const boutonCreerSession = document.querySelector('.Js-CreerSession');
  const formulaire = document.getElementById('sessionForm');
  const TitreSession = document.getElementById('TitreSession');
  const conteneurSessions = document.querySelector('.flex.flex-wrap.justify-center.gap-20.mb-14');

  TitreSession.classList.add('hidden');

  let sessions = [];
  const MaxSession = 3;

  function sauvegarderSessions() {
    localStorage.setItem('sessions', JSON.stringify(sessions));
  }

  function chargerSessions() {
    const sessionsStockees = localStorage.getItem('sessions');
    if (sessionsStockees) {
      sessions = JSON.parse(sessionsStockees);
      mettreAJourAffichage();
    }
  }

  function mettreAJourAffichage() {
    conteneurSessions.innerHTML = '';
    sessions.forEach((session, index) => {
      const carteSession = creerCarteSession(session, index);
      conteneurSessions.appendChild(carteSession);
    });

    TitreSession.classList.toggle('hidden', sessions.length === 0);
    boutonCreerSession.disabled = sessions.length >= MaxSession;
    boutonCreerSession.textContent = sessions.length >= MaxSession ? "Plus de session disponible" : "Créer la session";
    boutonCreerSession.classList.toggle('bg-red-600', sessions.length >= MaxSession);
    boutonCreerSession.classList.toggle('hover:bg-red-700', sessions.length >= MaxSession);

    console.log(`Il vous reste ${MaxSession - sessions.length} sessions`);
  }

  function creerCarteSession(session, index) {
    const carte = document.createElement('div');
    carte.className = 'bg-white shadow-xl rounded-2xl max-w-sm w-full overflow-hidden transition-all duration-300 hover:shadow-2xl';
    carte.innerHTML = `
      <div class="relative bg-blue-600 h-32 flex items-center justify-center">
        <div class="absolute top-4 right-4 bg-white text-blue-600 text-xs font-bold px-2 py-1 rounded-full">${session.sport}</div>
        <div class="w-24 h-24 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg flex items-center justify-center">
          <img src="../Images/${session.sport.toLowerCase()}.png" alt="${session.sport}">
        </div>
      </div>
      <div class="p-6">
        <div class="text-center mb-4">
          <h2 class="text-2xl font-bold text-gray-800">Session #${index + 1}</h2>
          <span class="text-sm font-semibold text-gray-600">${session.date}</span>
        </div>
        <div class="space-y-3 mb-6">
          <div class="flex items-start">
            <svg class="w-5 h-5 mr-2 flex-shrink-0 mt-1 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <p class="text-gray-600 font-semibold">Niveau: ${session.niveau}</p>
          </div>
          <div class="flex items-start">
            <svg class="w-5 h-5 mr-2 flex-shrink-0 mt-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p class="text-gray-600">${session.tempsDebut} - ${session.tempsFin}</p>
          </div>
          <div class="flex items-start">
            <svg class="w-5 h-5 mr-2 flex-shrink-0 mt-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <p class="text-gray-600">${session.lieu}</p>
          </div>
          <div class="flex items-start">
            <svg class="w-5 h-5 mr-2 flex-shrink-0 mt-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            <p class="text-gray-600">${session.notes}</p>
          </div>
        </div>
        <div class="flex justify-between">
          <button onclick="supprimerSession(${index})" class="px-4 py-2 m-auto bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-all duration-300">
            Supprimer
          </button>
        </div>
      </div>
    `;
    return carte;
  }

  function supprimerSession(index) {
    sessions.splice(index, 1);
    mettreAJourAffichage();
    sauvegarderSessions();
  }

  boutonCreerSession.addEventListener('click', function(event) {
    event.preventDefault();

    if (sessions.length >= MaxSession) {
      console.log("Vous ne pouvez plus créer de sessions");
      return;
    }

    const nouvelleSession = {
      age: document.getElementById('AgeInput').value,
      date: document.getElementById('date').value,
      tempsDebut: document.getElementById('tempsdebut').value,
      tempsFin: document.getElementById('tempsfin').value,
      lieu: document.getElementById('location').value,
      niveau: document.getElementById('niveau').value,
      notes: document.getElementById('notes').value,
      sport: document.getElementById('sport').value
    };

    sessions.push(nouvelleSession);
    mettreAJourAffichage();
    sauvegarderSessions();
    formulaire.reset();
  });

  window.supprimerSession = supprimerSession;

  chargerSessions();
}

CreerSession();