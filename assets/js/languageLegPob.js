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
        TytulLP:"Witamy na stronie poświęconej wsparciu w procesie legalizacji pobytu w Polsce.",
        opisLP:"Naszym celem jest zapewnienie kompleksowej i profesjonalnej pomocy na każdym etapie tego często skomplikowanego procesu. Z nami legalizacja pobytu staje się znacznie prostsza i mniej stresująca. Oto, jak możemy Ci pomóc:",
        PodTyt1LP:"Analiza Twojej sytuacji pobytowej",
        PodTyt2LP:"Indywidualny plan procedury legalizacji pobytu",
        PodTyt3LP:"Rezerwacja terminu do złożenia wniosku",
        PodTyt4LP:"Wsparcie w procesie kompletowania dokumentów",
        PodTyt5LP:"Wspólna wizyta w Urzędzie Wojewódzkim",
        PodTyt6LP:"Kontakt z pracodawcą",
        PodOpis1LP:"Zaczniemy od szczegółowej analizy Twojej aktualnej sytuacji prawnej i pobytowej w Polsce. Dzięki temu zrozumiemy wszystkie specyfiki Twojego przypadku i będziemy mogli dostosować nasze działania do Twoich indywidualnych potrzeb.",
        PodOpis2LP:"Na podstawie zebranej wiedzy, przygotujemy dla Ciebie indywidualny plan działania, który pomoże w efektywnym przejściu przez cały proces legalizacji. Plan ten będzie uwzględniał wszystkie niezbędne kroki, terminy oraz wymagane dokumenty.",
        PodOpis3LP:"Zapewnimy, że nie przegapisz żadnych ważnych terminów. Zajmiemy się za Ciebie rezerwacją terminu w odpowiednim urzędzie, abyś mógł złożyć wniosek o legalizację pobytu bez zbędnej zwłoki.",
        PodOpis4LP:"Pomożemy Ci zgromadzić wszystkie niezbędne dokumenty, które są wymagane do wniosku o legalizację pobytu. Nasze doświadczenie pozwala nam precyzyjnie określić, które dokumenty będą potrzebne, a także jak prawidłowo je przygotować.",
        PodOpis5LP:"Nie zostawimy Cię samego w najważniejszym momencie. Towarzyszymy naszym klientom podczas wizyty w Urzędzie Wojewódzkim, aby zapewnić wsparcie na miejscu i pomóc w ewentualnych rozmowach z urzędnikami.",
        PodOpis6LP:"W przypadku, gdy legalizacja pobytu wiąże się z zatrudnieniem, oferujemy również wsparcie w komunikacji z Twoim pracodawcą. Dzięki temu proces kompletowania dokumentów przebiega sprawnie i minimalizowane są wszelkie możliwe błędy.",

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
        TytulLP:"Welcome to the website dedicated to support in the process of residence legalization in Poland.",
        opisLP:"Our goal is to provide comprehensive and professional assistance at every stage of this often complicated process. With us, the process of legalizing your stay becomes much simpler and less stressful. Here's how we can help you:",
        PodTyt1LP:"Analysis of Your Residence Situation",
        PodTyt2LP:"Individual Residence Legalization Procedure Plan",
        PodTyt3LP:"Appointment Scheduling",
        PodTyt4LP:"Support in Document Compilation",
        PodTyt5LP:"Joint Visit to the Provincial Office",
        PodTyt6LP:"Employer Contact",
        PodOpis1LP:"We will start with a detailed analysis of your current legal and residence situation in Poland. This will help us understand all the specifics of your case and adapt our actions to your individual needs.",
        PodOpis2LP:"Based on the knowledge gathered, we will prepare an individual action plan for you that will help you effectively navigate through the entire legalization process. This plan will include all necessary steps, deadlines, and required documents.",
        PodOpis3LP:"We will ensure that you don't miss any important deadlines. We will handle the reservation of an appointment at the appropriate office for you, so you can submit your residence legalization application without unnecessary delay.",
        PodOpis4LP:"We will help you gather all the necessary documents required for the application for residence legalization. Our experience allows us to precisely determine which documents will be needed and how to properly prepare them.",
        PodOpis5LP:"We won’t leave you alone at the most crucial moment. We accompany our clients during their visit to the Provincial Office to provide on-site support and assist in any discussions with officials.",
        PodOpis6LP:"In cases where residence legalization is related to employment, we also offer support in communicating with your employer. This ensures the document compilation process runs smoothly and minimizes any possible errors.",

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
document.getElementById('stronaglowna1').innerText = languages[language].stronaglowna;
document.getElementById('onas1').innerText = languages[language].onas;
document.getElementById('uslugi1').innerText = languages[language].uslugi;
document.getElementById('zespol1').innerText = languages[language].zespol;
document.getElementById('kontakt1').innerText = languages[language].kontakt;
//Kontent
document.getElementById('Tytul1SE1').innerText = languages[language].Btn1SE;
document.getElementById('Tytul1SE2').innerText = languages[language].Btn1SE;
document.getElementById('stronaglowna2').innerText = languages[language].stronaglowna;

//Legalizacja Pobytu ID
document.getElementById('TytulLP').innerText = languages[language].TytulLP;
document.getElementById('opisLP').innerText = languages[language].opisLP;
document.getElementById('PodTyt1LP').innerText = languages[language].PodTyt1LP;
document.getElementById('PodOpis1LP').innerText = languages[language].PodOpis1LP;
document.getElementById('PodTyt2LP').innerText = languages[language].PodTyt2LP;
document.getElementById('PodOpis2LP').innerText = languages[language].PodOpis2LP;
document.getElementById('PodTyt3LP').innerText = languages[language].PodTyt3LP;
document.getElementById('PodOpis3LP').innerText = languages[language].PodOpis3LP;
document.getElementById('PodTyt4LP').innerText = languages[language].PodTyt4LP;
document.getElementById('PodOpis4LP').innerText = languages[language].PodOpis4LP;
document.getElementById('PodTyt5LP').innerText = languages[language].PodTyt5LP;
document.getElementById('PodOpis5LP').innerText = languages[language].PodOpis5LP;
document.getElementById('PodTyt6LP').innerText = languages[language].PodTyt6LP;
document.getElementById('PodOpis6LP').innerText = languages[language].PodOpis6LP;


//Footer
document.getElementById('TelefonFO1').innerText = languages[language].TelefonFO;
//Menu Footer
document.getElementById('stronaglownaFO1').innerText = languages[language].stronaglownaFO;
document.getElementById('onasFO1').innerText = languages[language].onasFO;
document.getElementById('uslugiFO1').innerText = languages[language].uslugiFO;
document.getElementById('zespolFO1').innerText = languages[language].zespolFO;
document.getElementById('politykaprivFO1').innerText = languages[language].politykaprivFO;
 //Uslugi Footer
document.getElementById('tytulFO1').innerText = languages[language].tytulFO;
document.getElementById('LegPobFO1').innerText = languages[language].LegPobFO;
document.getElementById('LegZatFO1').innerText = languages[language].LegZatFO;
document.getElementById('ZasFO1').innerText = languages[language].ZasFO;
document.getElementById('PrawoJazFO1').innerText = languages[language].PrawoJazFO;
document.getElementById('ZamelFO1').innerText = languages[language].ZamelFO;
document.getElementById('NadanieObywFO1').innerText = languages[language].NadanieObywFO;
}


//Podstrona Legalizacja Zatrudnienia


document.getElementById('language-toggle').addEventListener('change', function() {
    const language = this.checked ? 'en' : 'pl';

    updateTexts(language);
  });

  
  // Uaktualnij teksty na początkowy język (polski) po załadowaniu strony
  window.onload = () => updateTexts('pl');
