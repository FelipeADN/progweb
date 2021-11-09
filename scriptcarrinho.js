var dados = JSON.parse(window.localStorage.getItem("carrinho")); //pega os dados do carrinho

window.onload = function(){ //quando a pagina carrega executa a funçao
    mostrarCards();
};

function mostrarCards(){

    var preco = []; //vetor com os precos

    var quantidades = []; //vetor com a quantidade dos produtos

    for (var i = 0; i < dados.length; i++){

        if (document.getElementById('input'+i) == null){ //inicia os vetores, com os precos dos produtos, e quantidades em 1
            preco[i] = dados[i][5];
            quantidades[i] = 1;
        }
        else{ //caso ja tenha rodado uma vez, mantem as quantidades que foram colocadas, e atualiza os precos em relacao as quantidades
            quantidades[i] = document.getElementById('input'+i).value;
            preco[i] = dados[i][5]*quantidades[i];
        }
    }

    document.getElementById("deck").innerHTML = ""; //limpa o html

    for (var i = 0; i < dados.length; i++) { //atualiza os cards

        var conteudo = "";

        conteudo += '<div id="card">';
        conteudo += '<img src="'+dados[i][2]+'" alt="maple">';
        conteudo += '<div id="texto">';
        conteudo += '<h2 id="titulo">'+dados[i][1]+'</h2>';
        conteudo += '<p id="descricao">'+dados[i][3]+'</p></div>';
        conteudo += '<div id="direita">';
        conteudo += '<div id="quantidade">';
        conteudo += '<p>Quantidade:</p>';
        conteudo += '<input id="input'+i+'" type="number" value="'+quantidades[i]+'"></div>';
        conteudo += '<div id="preco">';
        conteudo += '<span>Preço:R$</span>';
        conteudo += '<span>'+preco[i]+',00</span></div>';
        conteudo += '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="comprar()">Comprar</button></div></div>';

        document.getElementById("deck").innerHTML += conteudo;        
    }

    for (var i = 0; i < dados.length; i++){ //cria um event listener para cada card, para quando apertar enter na quantidade, atualizar os precos

        var input = document.getElementById('input'+i);

        input.addEventListener('keyup', function(event){
            if (event.keyCode === 13){
                mostrarCards();
            }
        });
    }
}

function comprar(){ //mesagem da compra
    alert("Produto comprado com sucesso!");
}

function limpar(){ //limpa web storage
    window.localStorage.clear();
}