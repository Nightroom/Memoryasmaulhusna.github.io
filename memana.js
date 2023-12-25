//for section
const section = document.querySelector("section")
const nyawaCount = document.querySelector("span")
let nyawa = 6;
//link text
nyawaCount.textContent = nyawa;
//data for image

const getData = () => [
{imgSrc: "./img/Albaqi.jpg", name: "Al-baqi" },
{imgSrc: "./img/Alhakam.jpg", name: "Al-hakam" },
{imgSrc: "./img/Almalik.jpg", name: "Al-malik" },
{imgSrc: "./img/Alqayyum.jpg", name: "Al-qayyum" },
{imgSrc: "./img/Annurr.jpg", name: "An-nurr" },
{imgSrc: "./img/Asshamad.jpg", name: "As-shamad" },
{imgSrc: "./img/Alafuww.jpg", name: "Al-afuww" },
{imgSrc: "./img/Allathif.jpg", name: "Al-lathif" },
{imgSrc: "./img/Albaqi.jpg", name: "Al-baqi" },
{imgSrc: "./img/Alhakam.jpg", name: "Al-hakam" },
{imgSrc: "./img/Almalik.jpg", name: "Al-malik" },
{imgSrc: "./img/Alqayyum.jpg", name: "Al-qayyum" },
{imgSrc: "./img/Annurr.jpg", name: "An-nurr" },
{imgSrc: "./img/Asshamad.jpg", name: "As-shamad" },
{imgSrc: "./img/Alafuww.jpg", name: "Al-afuww" },
{imgSrc: "./img/Allathif.jpg", name: "Al-lathif" },
];

//kolom random
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};
//card General Function
const cardGenerator = () => {
    const cardData = randomize();

    //Genarate the HTML
    cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //lampiran informasi kartu
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    //lampiran kartu
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    
    card.addEventListener("click", (e) => {
        card.classList.toggle("toggleCard");
        checkCards(e);
    });
  });
};
//Untuk ngecek kartu
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll ("toggleCard")
    console.log(flippedCards);
   //Logika
   if (flippedCards.length === 2){
    if (
        flippedCards[0].getAttribute("name") ===
        flippedCards[1].getAttribute("name")
    ) {
        console.log("match");
        flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
        });
    } else {
        console.log("wrong");
        flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
        });
//notifikasi lose di game
        nyawa--;
        nyawaCount.textContent = nyawa;
        if (nyawa === 0) {
            restart("COBA LAGI!!!....HAHAHAHAHAHAHAHAH");
    }
}
}
//notifikasi win di game
   if (toggleCard.length === 16){
    restart("HOKI DOANG ITU MAH!!!!");
   }
};
//restart ulang
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach ((item, index) => {
        cards[index].classList.remove("toggleCard")
        //randomize
        setTimeout (() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
    });
    nyawa = 6;
    nyawaCount.textContent = nyawa;
    setTimeout(() => window.alert(text), 100);
};
        //randomize
cardGenerator();