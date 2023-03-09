/* 
Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione

Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione 
del markup statico: costruiamo il container e inseriamo l'immagine grande 
in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali 
per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, 
l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura 
attiva è la prima e l'utente clicca la freccia verso destra, 
la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima 
miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare 
l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo 
di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del 
meccanismo di autoplay.

*/






const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



//creazioni variabili che mi servono per manipolazione DOM
const upArrowEl = document.getElementById("up-arrow")
const downArrowEl = document.getElementById("down-arrow")
const startAutoplayEl = document.getElementById("start")
const stopAutoplayEl = document.getElementById("stop")
const reverseAutoplayEl = document.getElementById("reverse")
const imagesContainerEl = document.getElementById("img-container")
const thumbnailsContainerEl = document.getElementById("thumbnails-container")
let currentImg = document.createElement("img");
let currentImgTitle = document.getElementById("title")
let currentImgDescription = document.getElementById("description")
let autoplay;
let reverseAutoplay;


// mostro l'immagine con index "0" contenura nell'array appena si carica la pagina
currentImg.src = images[0].image
currentImgTitle.innerHTML = images[0].title
currentImgDescription.innerHTML = images[0].text
imagesContainerEl.append(currentImg)
imagesContainerEl.append(currentImgTitle)
imagesContainerEl.append(currentImgDescription)


//creo un contatore per gli indici delle images
let index; 

let thumbnail;

// creo le thumbnails 
 createThumbnail(images , thumbnail)





// aggiungo classe active alla thumbnail con index "0"
let thumbList = document.querySelectorAll(".thumbnail")
thumbList[0].classList.add("active")








for(let i = 0; i < thumbList.length;i++){

    let clicked = thumbList[i]
    
// aggiungo evento alla thumbnail cliccata
    clicked.addEventListener("click", function(){
       
        thumbList = document.querySelectorAll(".thumbnail")

// creo un ciclo for per rimuoverre da tutte le thumbnail la classe :active
        for(let k = 0; k < thumbList.length;k++){
            thumbList[k].classList.remove("active")
        }

// aggiungo la classe :active alla thumbnail cliccata         
        clicked.classList.add("active")

// cambio immagine grande in base all'indice della thumbnail cliccata        
        currentImg.src = images[i].image

//l'indice assume il valore in base alla thumbnail cliccata        
        index = i
    })

}

    /* _____ FRECCE _____ */
    
    // aggiungo evento al click della freccia in alto
    upArrowEl.addEventListener("click", () => {
    
        goUp();
        
    })
        
    // aggiungo evento al click della freccia in basso
    downArrowEl.addEventListener("click", () =>{
    
        goDown();
    
    })
    
    
    /* ______ / FRECCE _____ */
        
    
    
    /* _____ BOTTONI _____ */
    
    
    
    //aggiungo evento al tasto start autoplay
    startAutoplayEl.addEventListener("click", () =>{
    
        clearInterval(reverseAutoplay)
         // al clik la funzione goUp viene ripetuta ogni 2 secondi   
         autoplay = setInterval(goUp, 2000)
    
    })
    
    // aggiungo evento al tasto stop autoplay
    stopAutoplayEl.addEventListener("click", () =>{
    
        //al click stop a tutte le timing function attive
        clearInterval(autoplay)
        clearInterval(reverseAutoplay)
    })
    
    
    // aggiungo evento al tasto reverse autoplay
    reverseAutoplayEl.addEventListener("click", () => {
    
        clearInterval(autoplay)
        // al click la funzione goDown viene ripetuta ogni 2 secondi
        reverseAutoplay = setInterval(goDown, 2000);
    
    })
    
    
    /* ______ /BOTTONI ______ */














    
      
    































/*_________________FUNZIONI____________*/


function goUp (){

    // // rimuovo la classe active dalla thumbnail precedente
    thumbList[index].classList.remove("active")

    if (index == 0){
        index = 4
    } else {

        index--
    }

    // appendo all'images container gli elementi relativi alle proprietò dell'indice dell'array "images"
        currentImg.src = images[index].image
        currentImgTitle.innerHTML = images[index].title
        currentImgDescription.innerHTML = images[index].text
        imagesContainerEl.append(currentImg)
        imagesContainerEl.append(currentImgTitle)
        imagesContainerEl.append(currentImgDescription)

        // // aggiungo classe .active alla thumbnail corrente 
        thumbList[index].classList.add("active")
        
    }





function goDown (){

    // rimuovo la classe active dalla thumbnail precedente
    thumbList[index].classList.remove("active")

    if (index == 4){
        index = 0
    } else {

        index++
    }

    // appendo all'images container gli elementi relativi alle proprietò dell'indice dell'array "images"
        currentImg.src = images[index].image
        currentImgTitle.innerHTML = images[index].title
        currentImgDescription.innerHTML = images[index].text
        imagesContainerEl.append(currentImg)
        imagesContainerEl.append(currentImgTitle)
        imagesContainerEl.append(currentImgDescription)

    // aggiungo classe .active alla thumbnail corrente    
        thumbList[index].classList.add("active")
    }





function createThumbnail(array, newEl){


    for(let i = 0;i < array.length;i++){

        
        newEl = document.createElement("img")
        
        newEl.src = array[i].image
        newEl.classList.add("thumbnail")
        newEl.style.width = "100%"
        newEl.style.height = `calc(100% / ${array.length})`;
        thumbnailsContainerEl.append(newEl);

        
    }

    return newEl
    

}
