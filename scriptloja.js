var dados = [[0, "Maple Syrup", "maple.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est augue, molestie sed rhoncus sed.", false, 50],
[1, "Maple Syrup2", "maple.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est augue, molestie sed rhoncus sed.", false, 30],
[2, "Maple Syrup3", "maple.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est augue, molestie sed rhoncus sed.", false, 25],
[3, "Maple Syrup4", "maple.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est augue, molestie sed rhoncus sed.", false, 10]];
//matriz com os dados

var storage = []; //vetor com produtos que serao adicionado no webstorage

window.onload = function(){ //funcoes que executam quando a pagina e carregada
    teste();
};

function teste(){ //atualiza os produtos que ja foram ou nao adicionados no carrinho em relacao ao webstorage
    var carrinho = JSON.parse(window.localStorage.getItem("carrinho"));

    if (carrinho != null){
        storage = JSON.parse(window.localStorage.getItem("carrinho"));
        for (var i = 0 ; i < carrinho.length; i++){
            if (carrinho[i][4] == true) {
                id = carrinho[i][0];
                for (var y = 0; y < dados.length; y++){
                    if (dados[y][0] == id){
                        dados[y][4] = true;
                    }
                }
            }
        }
    }
    mostrarCards();
}

function mostrarCards(){ //adiciona os cards no html

    document.getElementById("produtos").innerHTML = ""; //limpa os divs no html
    document.getElementById("produtos2").innerHTML = "";

    for (var i = 0; i < 2; i++) { //atualiza o html

        var conteudo = "";

        conteudo += '<div class="mdl-card">';
        conteudo += '<div class="mdl-card__title">';
        conteudo += '<h2 class="mdl-card__title-text">'+dados[i][1]+'</h2></div>';
        conteudo += '<div class="mdl-card__media">';
        conteudo += '<img src="'+dados[i][2]+'" alt="maple"></div>';
        conteudo += '<div class="mdl-card__supporting-text">';
        conteudo += '<p>'+dados[i][3]+'</p></div>';
        conteudo += '<div class="mdl-card__actions mdl-card--border">';
        if(dados[i][4] == false){
            conteudo += '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="adicionar('+dados[i][0]+')">adicionar ao carrinho</button></div></div>';
        }
        else{
            conteudo += '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">adicionado</button></div></div>';
        }
        
        document.getElementById("produtos").innerHTML += conteudo;
    }

    for (var i = 2; i < 4; i++) {

        var conteudo = "";

        conteudo += '<div id="card'+(i+1)+'-tela1" class="mdl-card">';
        conteudo += '<div class="mdl-card__title">';
        conteudo += '<h2 class="mdl-card__title-text">'+dados[i][1]+'</h2></div>';
        conteudo += '<div class="mdl-card__media">';
        conteudo += '<img src="'+dados[i][2]+'" alt="maple"></div>';
        conteudo += '<div class="mdl-card__supporting-text">';
        conteudo += '<p>'+dados[i][3]+'</p></div>';
        conteudo += '<div class="mdl-card__actions mdl-card--border">';
        if(dados[i][4] == false){
            conteudo += '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="adicionar('+dados[i][0]+')">adicionar ao carrinho</button></div></div>';
        }
        else{
            conteudo += '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">adicionado</button></div></div>';
        }
        
        document.getElementById("produtos").innerHTML += conteudo;
    }

    for (var i = 2; i < 4; i++) {

        var conteudo = "";

        conteudo += '<div id="card'+(i+1)+'-tela2" class="mdl-card">';
        conteudo += '<div class="mdl-card__title">';
        conteudo += '<h2 class="mdl-card__title-text">'+dados[i][1]+'</h2></div>';
        conteudo += '<div class="mdl-card__media">';
        conteudo += '<img src="'+dados[i][2]+'" alt="maple"></div>';
        conteudo += '<div class="mdl-card__supporting-text">';
        conteudo += '<p>'+dados[i][3]+'</p></div>';
        conteudo += '<div class="mdl-card__actions mdl-card--border">';
        if(dados[i][4] == false){
            conteudo += '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="adicionar('+dados[i][0]+')">adicionar ao carrinho</button></div></div>';
        }
        else{
            conteudo += '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">adicionado</button></div></div>';
        }

        document.getElementById("produtos2").innerHTML += conteudo;
    }
}

function adicionar(id){ //adiciona no carrinho, e no vetor storage

    dados[id][4] = true;

    storage.push(dados[id]);

    window.localStorage.setItem("carrinho", JSON.stringify(storage));

    mostrarCards();
}