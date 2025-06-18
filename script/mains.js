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
}


// Milestone 2
// Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
// Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
// Cliccando invece il button di chiusura, l’overlay scompare nuovamente.



// Milestone 3
// Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare 
// in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
// Ci sono diversi modi di farlo, prova a sperimentare