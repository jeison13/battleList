

const battle = document.getElementById('listOn');


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
    <div class = 'block tokenIn' >
    <p class = 'tittlePj'>${obj.name} </p>
    <p> vida ${obj.hp}</p>
    <p>caracteristicas</p>
    <p> str ${obj.str} dex ${obj.dex} con ${obj.con} int ${obj.int} sab ${obj.sab} car ${obj.car}  </p>
    <div> ${obj.txt} </div>
    <button id = 'delete' class='btnDelete'>delete</button>
    </div>
    `;
    battleList.appendChild(element);
    console.log(card_id);
})

function offBattle(e){
    let element = e;
        let elementToDelete = element.parentNode;
        let nameDelete = elementToDelete.getAttribute('id');
        // let tokens = JSON.parse(localStorage.getItem('tokens')
        if (element.getAttribute('id') === 'delete' ) {
            limpiarBD(nameDelete);
            console.log(elementToDelete);
            elementToDelete.remove();
            
        }   
}

battle.addEventListener('click',function(e){
      offBattle(e.target);
});

Sortable.create(battle,{});