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