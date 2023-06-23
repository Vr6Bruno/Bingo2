function desenharCartela(){

    //Escolho onde criar o elemento
    const pai_div_cartela = document.getElementById
    ('body_cartelas');
    
    //Crio uma div para a cartela
    const div_cartela = document.createElement
    ('div');
    div_cartela.className = 'cartela';

    //Insiro a minha div dentro da div pai
    pai_div_cartela.appendChild(div_cartela);

    //Crio um elemento de texto para o nome do jogador
    const h4_jogador = document.createElement('h4');
    h4_jogador.innerText = "Nome Jogador";

    //Inserir o nome do jogador dentro da div
    div_cartela.appendChild(h4_jogador);

    //Criar tabelas para o bingo
    const tabela = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    
    //Cria os elementos do thead
    const thB = document.createElement('th');
    const thI = document.createElement('th');
    const thN = document.createElement('th');
    const thG = document.createElement('th');
    const thO = document.createElement('th');

    thB.innerText = 'B'
    thI.innerText = 'I'
    thN.innerText = 'N'
    thG.innerText = 'G'
    thO.innerText = 'O'

    //Inserir o th no thead
    thead.appendChild(thB);
    thead.appendChild(thI);
    thead.appendChild(thN);
    thead.appendChild(thG);
    thead.appendChild(thO);

    for(var i = 0; i < 5; i++){
        const tr = document.createElement('tr');
        for(var j = 0; j < 5; j++){
            const td = document.createElement('td');
            td.innerText = 'x';
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }


    //Inserir nas tabelas
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    div_cartela.appendChild(tabela)
} 

function gerarCartela(){
    var cartela = [];

    while(cartela.lenght < 25){
        var aleatorio = Math.floor(Math.random()*75 + 1);
        if(!cartela.includes(aleatorio)){
            cartela.push(aleatorio);
        }
    }

    console.log(cartela);
    return cartela;
}