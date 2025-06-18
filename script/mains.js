const postContEl = document.getElementById('post-container');

const response = fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(resp => resp.json())
.then(data => {
    console.log(data);
    getData(data)    
})

function getData (data){
    
    let columnsMarkup = ''
    
    data.forEach(post => {
        
        console.log(post.title);
        console.log(post.date);
        console.log(post.url);

        const {title, date, url} = post;

        columnsMarkup +=
        `<div class="col">
            <div class="card">
                <img src="./img/pin.svg" class="pin">
                <img src="${url}" class="img">
                <p>${title}, ${date}</p>
            </div>
        </div>`;
    
    });

    postContEl.innerHTML = columnsMarkup;

    showOverlay(data);
}

// seleziono il container della modale
const modalEl = document.getElementById('modal-cont');
        
// seleziono l'immagine nel modale
const modalImgEl = document.getElementById('big-img');
        
// sleziono il bottone
const btnBack = document.getElementById('canc');


function showOverlay(data){
    // seleziono la card
    const cards = document.querySelectorAll('.card');
        
    // verifico gli elementi selezionati
    console.log(cards);
    console.log(modalEl);
    console.log(modalImgEl);
    console.log(btnBack);

    cards.forEach((card) => {
        card.addEventListener('click', () => {
            console.log(card);
    
            const imgSrcUrl = card.querySelector('.img').src
            console.log(imgSrcUrl);
            
            modalImgEl.src = imgSrcUrl;

            // al click sulla card rimuovo la classe d-none da modalEl
            modalEl.classList.remove("dNone");       
        })
    })

    // do valore al bottone facendo ricaricare la pagina 
    btnBack.addEventListener('click', () => {
        modalEl.classList.add("dNone");  
    })
}