tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        backgroundColor: {
          dark: "black",
         
        },
      
      },
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    const controleurTheme = document.querySelector(".theme-controller");
    
    const basculerTheme = (estSombre) => {
      document.documentElement.classList.toggle("dark", estSombre);
      document.documentElement.setAttribute("data-theme", estSombre ? "black" : "light");
      controleurTheme.checked = estSombre;
      localStorage.setItem("modeSombre", estSombre);
    };
  
    controleurTheme.addEventListener("change", () => basculerTheme(controleurTheme.checked));
  
    basculerTheme(localStorage.getItem("modeSombre") ===  "true");
  });
  


//   async function ChercherPokemon (){

// let texte = document.getElementById('monTexte')
// let image = document.getElementById('imagepokemon')
// let inputElement = document.getElementById('monInput')

//     try {

//       let input = inputElement.value.trim().toLowerCase()
// const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${input}`)

// if(!response.ok){
//   throw new Error("Ca n'a pas marché")
// }

// let data = await response.json()
// console.log(data)
// let NomPokemon = data.name
// let ImagePokemon = data.sprites.front_default

// texte.textContent = NomPokemon
// image.src = ImagePokemon
// inputElement.value = ""

//     }
//     catch(error){
// console.error(error)
//     }
//   }


//   function CliquerPokemon(){
//     let bouton = document.getElementById('monBouton');
//     bouton.addEventListener('click',ChercherPokemon)
//   }
 
//   CliquerPokemon()


  

