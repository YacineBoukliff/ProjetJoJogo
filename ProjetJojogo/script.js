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
  
    basculerTheme(localStorage.getItem("modeSombre") === "true");
  });