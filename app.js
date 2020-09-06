class cToken{
    constructor(name,hp,str,dex,con,int,sab,car,txt){
        this.name = name;
        this.hp = hp;
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.sab = sab;
        this.car = car;
        this.txt = txt;
    }
}

function limpiarBD(parametro) {
    let tokens = JSON.parse(localStorage.getItem('tokens'));
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i].name === parametro) {
                tokens.splice(i,1);
                localStorage.setItem('tokens',JSON.stringify(tokens));
                }
        
            }
    
}

class funcionalidades{
    addId(u){
        let myId = document.getElementById(u).value;
        return myId;
    }
    
    printToken(token){
         let cardToken = document.getElementById('lisTokens');
         let element = document.createElement('div');
         element.innerHTML = ` <div id="${token.name}" class='block token'><p>  ${token.name} </p>
         <button id = 'delete' class='btnDelete'>delete</button>
         <button id = 'battle' class='btnBattle'>battle</button>
         <div>
          `
        cardToken.appendChild(element);
    }

    deleteToken(e) {
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
}

const dom = new funcionalidades();

//buscar e imprimir

function tokensearch() {
    let tokens = JSON.parse(localStorage.getItem('tokens'));
    
    for (let i = 0; i < tokens.length; i++) {
           
            dom.printToken(tokens[i]);
             
    }
}

document.getElementById('lisTokens').addEventListener('click',function(e){
    dom.deleteToken(e.target);
})

// guardar datos
document.getElementById('frominput').addEventListener('submit',function(e){

    let name = document.getElementById('name').value;
    let hp = document.getElementById('hp').value;
    let str = document.getElementById('str').value;
    let dex = document.getElementById('dex').value;
    let con = document.getElementById('con').value;
    let int = document.getElementById('int').value;
    let sab = document.getElementById('sab').value;
    let car = document.getElementById('car').value;
    let txt = document.getElementById('txt').value;

    const token = new cToken(name,hp,str,dex,con,int,sab,car,txt);

    if (token.name == null) {
        alert('elige un nombre porfavor');
    }else{

        if (localStorage.getItem('tokens') === null) {
            let tokens = [];
            tokens.push(token);
            localStorage.setItem('tokens',JSON.stringify(tokens));
            dom.printToken(token);
        }else{
            
            let tokens = JSON.parse(localStorage.getItem('tokens'));
            // captar si hay un token.name repetido
            let contador = 0;
            for (let i = 0; i < tokens.length; i++) {
                
                if (tokens[i].name == token.name) {
                   contador = contador + 1
                }    
            }
            if (contador === 0) {
               
                tokens.push(token);
                localStorage.setItem('tokens',JSON.stringify(tokens));
                dom.printToken(token);
                
            }else{
                alert('no pueden existir don tokens con el mismo nombre');
            }
            console.log(contador);
            console.log(tokens);
        }

    }
       
    e.preventDefault();
});

tokensearch();





