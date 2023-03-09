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




/* 

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali 
per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, 
l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

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

const upArrowEl = document.getElementById("up-arrow")
const downArrowEl = document.getElementById("down-arrow")
const imagesContainerEl = document.getElementById("img-container")
const thumbnailsContainerEl = document.getElementById("thumbnails-container")
let currentImg = document.createElement("img");
let currentImgTitle = document.getElementById("title")
let currentImgDescription = document.getElementById("description")



currentImg.src = images[0].image
currentImgTitle.innerHTML = images[0].title
currentImgDescription.innerHTML = images[0].text
imagesContainerEl.append(currentImg)
imagesContainerEl.append(currentImgTitle)
imagesContainerEl.append(currentImgDescription)
let index = 0 


createThumbnail(images)


let thumbList = document.querySelectorAll(".thumbnail")
thumbList[index].classList.add("active")


upArrowEl.addEventListener("click", () => {
    
    goUp();
    
})

downArrowEl.addEventListener("click", () =>{

    
    goDown();

})

    
      
    















/*_________________FUNZIONI____________*/


function goUp (){

    thumbList[index].classList.remove("active")

    if (index == 0){
        index = 4
    } else {

        index--
    }

    console.log(index)
        currentImg.src = images[index].image
        currentImgTitle.innerHTML = images[index].title
        currentImgDescription.innerHTML = images[index].text
        imagesContainerEl.append(currentImg)
        imagesContainerEl.append(currentImgTitle)
        imagesContainerEl.append(currentImgDescription)
        thumbList[index].classList.add("active")
        
    }





function goDown (){

    thumbList[index].classList.remove("active")

    if (index == 4){
        index = 0
    } else {

        index++
    }

    console.log(index)
        currentImg.src = images[index].image
        currentImgTitle.innerHTML = images[index].title
        currentImgDescription.innerHTML = images[index].text
        imagesContainerEl.append(currentImg)
        imagesContainerEl.append(currentImgTitle)
        imagesContainerEl.append(currentImgDescription)
        thumbList[index].classList.add("active")
    }





function createThumbnail(array){


    for(let i = 0;i < array.length;i++){

        
        let newThumbnail = document.createElement("img")
        newThumbnail.src = array[i].image
        newThumbnail.classList.add("thumbnail")
        newThumbnail.style.width = "100%"
        newThumbnail.style.height = `calc(100% / ${array.length})`;
        thumbnailsContainerEl.append(newThumbnail);

    }

}
