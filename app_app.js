console.log('hola mi gente bella');

function search(yourName,tokens) {
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].name == yourName) {
            return tokens[i];        
        }
        
    }
} 



document.getElementById('lisTokens').addEventListener('click',function(e){
    
    let tokens = JSON.parse(localStorage.getItem('tokens'));
     // consegir el nombre del objeto
    let btn = e.target
    let card = btn.parentNode;
    let card_id = card.getAttribute('id')
    let obj = search(card_id,tokens);

    //impir visual
    let battleList = document.getElementById('listOn');
    let element = document.createElement('div');
    element.innerHTML = `
    <p class = 'block token'>'hola mis amigos lindos ${obj.name}.${obj.str}'</p>
    `;
    battleList.appendChild(element);
    console.log(card_id);
})