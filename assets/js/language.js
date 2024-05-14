const languages = {
    pl: {
      tytul: "Witaj w Easy Move!",
      slogan: "Twój spokój, nasza misja."
    },
    en: {
        tytul: "Welcome to my website!",
        slogan: "This is a sample text in English."
    }
  };

  // Początkowy język ustawiony na polski
let currentLanguage = 'pl';

function updateTexts(language) {
  document.getElementById('tytul').innerText = languages[currentLanguage].tytul;
  document.getElementById('slogan').innerText = languages[currentLanguage].slogan;
}

document.getElementById('language-toggle').addEventListener('click', function() {
    const language = this.checked ? 'en' : 'pl';
    updateTexts(language);
  });
  
  // Uaktualnij teksty na początkowy język (polski) po załadowaniu strony
  window.onload = () => updateTexts('pl');


  //Opcja z przyciskiem
  /*
  document.getElementById('changeLanguage').addEventListener('click', () => {
    // Zmiana języka
    currentLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
    updateTexts();
  });
  
  // Uaktualnij teksty po załadowaniu strony
  window.onload = updateTexts;
  */