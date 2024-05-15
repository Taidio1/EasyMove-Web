const languages = {
    pl: {
        //Home Section
        //Nav
        stronaglowna:"Strona Główna",
        onas:"O Nas",
        uslugi:"Usługi",
        zespol:"Zespół",
        kontakt:"Kontakt",

        //Services
        Btn1SE:"Legalizacja Pobytu",
        Btn2SE:"Legalizacja Zatrudnienia",       

        //Legaliazacja Pobytu
        TytulLP:"Witamy na stronie dedykowanej profesjonalnej pomocy w procesie legalizacji zatrudnienia w Polsce.",
        opisLP:"Naszym celem jest maksymalne optymalizowanie czasu potrzebnego do zrealizowania wszystkich procedur. Oto, jak możemy wspierać Ciebie i Twoją firmę:",
        PodTyt1LP:"Kontrola statusu zatrudnienia pracowników",
        PodTyt2LP:"Wniosek o wydanie informacji starosty",
        PodTyt3LP:"Optymalizacja procedury aplikacji",
        PodTyt4LP:"Złożenie wniosku o wydanie zezwolenia na pracę",
        PodTyt5LP:"Stały kontakt z inspektorem prowadzącym postępowanie",
        PodTyt6LP:"Kontakt z pracownikiem",
        PodOpis1LP:"Zapewniamy dokładne sprawdzenie i kontrolę statusu zatrudnienia Twoich pracowników, co jest kluczowym elementem w procesie legalizacji. Nasze działania pozwalają na identyfikację i szybkie reagowanie na wszelkie nieprawidłowości.",
        PodOpis2LP:"Nasi specjaliści zajmą się przygotowaniem i złożeniem wniosków o wydanie informacji starosty, co jest niezbędne do dalszego procesowania zezwoleń na pracę. Z naszą pomocą ten etap przebiega sprawnie i bez zbędnych opóźnień.",
        PodOpis3LP:"Dzięki naszemu doświadczeniu i znajomości procedur jesteśmy w stanie zoptymalizować cały proces aplikacji o wydanie informacji starosty, minimalizując czas oczekiwania i zwiększając efektywność procedur.",
        PodOpis4LP:"Nasi eksperci pomogą także w przygotowaniu i złożeniu wniosków o wydanie zezwoleń na pracę. Zapewniamy wsparcie na każdym etapie, aby procedura przebiegała gładko i zgodnie z obowiązującymi przepisami.",
        PodOpis5LP:"Utrzymujemy stały kontakt z inspektorem prowadzącym postępowanie w celu uzyskania aktualnych informacji na temat statusu wniosku. Dzięki temu możemy szybko reagować na wszelkie zmiany i zapewnić ciągłość procesu.",
        PodOpis6LP:"Zajmujemy się również bezpośrednim kontaktem z Twoim pracownikiem, aby minimalizować ryzyko błędów i usprawnić proces kompletowania dokumentów. Nasza obecność ułatwia i przyspiesza wymianę informacji między wszystkimi stronami.",

        //Contact
        TytulCO:"KONTAKT",
        AdressCO:"Adres",
        TelefonCO:"Telefon",

        //Footer
        TelefonFO:"Telefon:",
        //Menu footer
        stronaglownaFO:"Strona główna",
        onasFO:"O Nas",
        uslugiFO:"Usługi",
        zespolFO:"Zespół",
        politykaprivFO:"Polityka prywatności",
        //uslugi footer
        tytulFO:"Usługi",
        LegPobFO:"Legalizacja pobytu",
        LegZatFO:"Legalizacja zatrudnienia",
        ZasFO:"Zaświadczenie o niekaralności",
        PrawoJazFO:"Prawo Jazdy",
        ZamelFO:"Zameldowanie",
        NadanieObywFO:"Nadanie obywatelstwa polskiego"      
  },
  //------------------ENG------------------------
  en: {
      //Home Section
        //Nav
        stronaglowna:"Home Page",
        onas:"About Us",
        uslugi:"Services",
        zespol:"Team",
        kontakt:"Contact",


        //Services
        Btn1SE:"Residence Legalization",
        Btn2SE:"Employment Legalization",

        //Legaliazacja Pobytu
        TytulLP:"Welcome to the page dedicated to professional assistance in the employment legalization process in Poland.",
        opisLP:"Our goal is to maximize the optimization of the time required to complete all procedures. Here's how we can support you and your company:",
        PodTyt1LP:"Employee Employment Status Check",
        PodTyt2LP:"Application for Issuance of County Official Information",
        PodTyt3LP:"Optimization of the Application Procedure",
        PodTyt4LP:"Submission of an Application for a Work Permit",
        PodTyt5LP:"Constant Contact with the Inspector Handling the Proceedings",
        PodTyt6LP:"Contact with the Employee",
        PodOpis1LP:"We provide accurate verification and control of your employees' employment status, which is a key element in the legalization process. Our actions allow for the identification and rapid response to any irregularities.",
        PodOpis2LP:"Our specialists will handle the preparation and submission of applications for the issuance of county official information, which is essential for further processing of work permits. With our help, this stage proceeds smoothly and without unnecessary delays.",
        PodOpis3LP:"Thanks to our experience and knowledge of procedures, we are able to optimize the entire application process for issuing county official information, minimizing waiting time and increasing the efficiency of the procedures.",
        PodOpis4LP:"Our experts will also assist in preparing and submitting applications for work permits. We provide support at every stage to ensure the procedure runs smoothly and in accordance with the regulations.",
        PodOpis5LP:"We maintain constant contact with the inspector handling the proceedings to obtain current information about the status of the application. This allows us to quickly respond to any changes and ensure the continuity of the process.",
        PodOpis6LP:"We also handle direct contact with your employee to minimize the risk of errors and streamline the document compilation process. Our presence facilitates and speeds up the exchange of information between all parties.",

        //Contact
        TytulCO:"Contact",
        AdressCO:"Address",
        TelefonCO:"Phone",
        //Formularz
        ImieiNazCO:"Name and Surname",
        TematCO:"Subject",
        WiadomoscCO:"Message",
        BtnWiadCO:"Send Message",

        //Footer
        TelefonFO:"Phone:",
        //Menu footer
        stronaglownaFO:"Home Page",
        onasFO:"About Us",
        uslugiFO:"Services",
        zespolFO:"Team",
        politykaprivFO:"Privacy Policy",
        //uslugi footer
        tytulFO:"Services",
        LegPobFO:"Residence Legalization",
        LegZatFO:"Employment Legalization",
        ZasFO:"Certificate of No Criminal Record",
        PrawoJazFO:"Driver's License",
        ZamelFO:"Registration",
        NadanieObywFO:"Granting of Polish Citizenship" 
  }
};


//Podstrona Legalizacja Pobytu
//Nav
function updateTexts(language) {
document.getElementById('stronaglowna2').innerText = languages[language].stronaglowna;
document.getElementById('onas2').innerText = languages[language].onas;
document.getElementById('uslugi2').innerText = languages[language].uslugi;
document.getElementById('zespol2').innerText = languages[language].zespol;
document.getElementById('kontakt2').innerText = languages[language].kontakt;
//Kontent
document.getElementById('Tytul1SE2').innerText = languages[language].Btn2SE;
document.getElementById('Tytul1SE3').innerText = languages[language].Btn2SE;
document.getElementById('stronaglowna3').innerText = languages[language].stronaglowna;

//Legalizacja Zatrudnienia ID
document.getElementById('Tytul2LP').innerText = languages[language].TytulLP;
document.getElementById('opis2LP').innerText = languages[language].opisLP;
document.getElementById('PodTyt1LP2').innerText = languages[language].PodTyt1LP;
document.getElementById('PodOpis1LP2').innerText = languages[language].PodOpis1LP;
document.getElementById('PodTyt2LP2').innerText = languages[language].PodTyt2LP;
document.getElementById('PodOpis2LP2').innerText = languages[language].PodOpis2LP;
document.getElementById('PodTyt3LP2').innerText = languages[language].PodTyt3LP;
document.getElementById('PodOpis3LP2').innerText = languages[language].PodOpis3LP;
document.getElementById('PodTyt4LP2').innerText = languages[language].PodTyt4LP;
document.getElementById('PodOpis4LP2').innerText = languages[language].PodOpis4LP;
document.getElementById('PodTyt5LP2').innerText = languages[language].PodTyt5LP;
document.getElementById('PodOpis5LP2').innerText = languages[language].PodOpis5LP;
document.getElementById('PodTyt6LP2').innerText = languages[language].PodTyt6LP;
document.getElementById('PodOpis6LP2').innerText = languages[language].PodOpis6LP;


//Footer
document.getElementById('TelefonFO2').innerText = languages[language].TelefonFO;
//Menu Footer
document.getElementById('stronaglownaFO2').innerText = languages[language].stronaglownaFO;
document.getElementById('onasFO2').innerText = languages[language].onasFO;
document.getElementById('uslugiFO2').innerText = languages[language].uslugiFO;
document.getElementById('zespolFO2').innerText = languages[language].zespolFO;
document.getElementById('politykaprivFO2').innerText = languages[language].politykaprivFO;
 //Uslugi Footer
document.getElementById('tytulFO2').innerText = languages[language].tytulFO;
document.getElementById('LegPobFO2').innerText = languages[language].LegPobFO;
document.getElementById('LegZatFO2').innerText = languages[language].LegZatFO;
document.getElementById('ZasFO2').innerText = languages[language].ZasFO;
document.getElementById('PrawoJazFO2').innerText = languages[language].PrawoJazFO;
document.getElementById('ZamelFO2').innerText = languages[language].ZamelFO;
document.getElementById('NadanieObywFO2').innerText = languages[language].NadanieObywFO;
}


//Podstrona Legalizacja Zatrudnienia


document.getElementById('language-toggle').addEventListener('change', function() {
    const language = this.checked ? 'en' : 'pl';
    localStorage.setItem('preferredLanguage', language);
    updateTexts(language);
  });

  
  // Uaktualnij teksty na początkowy język (polski) po załadowaniu strony
  window.onload = () => {
    // Odczytaj zapisany język, domyślnie 'pl' (polski)
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'pl';
    updateTexts(savedLanguage);
  
    // Ustaw stan przełącznika zgodnie z zapisanym językiem
    document.getElementById('language-toggle').checked = savedLanguage === 'en';
  };
